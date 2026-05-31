import { useEffect, useRef, useState } from "react";
// UI removed: component now manages audio only (no visible button)

export default function Music({ play = false }) {
  const audioContextRef = useRef(null);
  const audioRef = useRef(null);
  const activeNodesRef = useRef([]);
  const synthPlayingRef = useRef(false);
  const startingRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const stopMusic = () => {
    // Stop HTMLAudio element if present
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } catch {}
      audioRef.current = null;
    }
    synthPlayingRef.current = false;
    activeNodesRef.current.forEach((node) => {
      try {
        node.stop();
        node.disconnect();
      } catch {
        // Ignore already stopped nodes.
      }
    });

    activeNodesRef.current = [];

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const stopSynth = () => {
    // Stop only the synth (WebAudio) without touching HTMLAudio
    activeNodesRef.current.forEach((node) => {
      try {
        node.stop();
        node.disconnect();
      } catch {}
    });
    activeNodesRef.current = [];
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch {}
      audioContextRef.current = null;
    }
    synthPlayingRef.current = false;
  };

  const playMusic = async () => {
    // Prevent concurrent starts
    if (startingRef.current) {
      console.debug("Music: start blocked — already starting");
      return;
    }
    if (audioRef.current) {
      console.debug("Music: start blocked — already playing");
      return;
    }
    startingRef.current = true;
    // Ensure any existing audio or synth is stopped before starting
    stopMusic();

    // Prefer playing the uploaded audio file from public/
    try {
      const audio = new Audio("/alex-warren-ordinary.mp3");
      audio.loop = true;
      audio.volume = 0.12;
      console.debug("Music: creating HTMLAudio and attempting play");
      await audio.play();
      // If synth was running, stop it to avoid double audio
      if (synthPlayingRef.current) stopSynth();
      audioRef.current = audio;
      setIsPlaying(true);
      startingRef.current = false;
      console.debug("Music: HTMLAudio playing");
      return;
    } catch (err) {
      console.debug("Music: HTMLAudio play failed, falling back to synth", err);
      // Fall through to synth fallback if playback is blocked or fails
    }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (audioContextRef.current) {
      return;
    }

    const audioContext = new AudioContextClass();
    audioContextRef.current = audioContext;

    const masterGain = audioContext.createGain();
    masterGain.gain.value = 0.04;
    masterGain.connect(audioContext.destination);

    const createTone = (frequency, startTime, duration) => {
      const oscillator = audioContext.createOscillator();
      const toneGain = audioContext.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      toneGain.gain.setValueAtTime(0, startTime);
      toneGain.gain.linearRampToValueAtTime(0.7, startTime + 0.12);
      toneGain.gain.linearRampToValueAtTime(0, startTime + duration);
      oscillator.connect(toneGain);
      toneGain.connect(masterGain);
      oscillator.start(startTime);
      oscillator.stop(startTime + duration + 0.05);
      activeNodesRef.current.push(oscillator);
    };

    const bpm = 68;
    const beat = 60 / bpm;
    const startTime = audioContext.currentTime + 0.06;
    const progression = [
      [261.63, 329.63, 392],
      [293.66, 369.99, 440],
      [329.63, 415.3, 493.88],
      [293.66, 392, 466.16],
    ];

    progression.forEach((chord, chordIndex) => {
      chord.forEach((frequency) => {
        createTone(frequency, startTime + chordIndex * beat * 2, beat * 1.8);
      });
    });

    setIsPlaying(true);
    synthPlayingRef.current = true;
    startingRef.current = false;
  };

  useEffect(() => {
    if (play) {
      playMusic().catch(() => {
        // Autoplay can still be blocked until the user interacts.
      });
    }

    return () => {
      stopMusic();
    };
  }, [play]);

  const toggleMusic = () => {
    // If using HTMLAudio, toggle play/pause
    if (audioRef.current) {
      try {
        if (!audioRef.current.paused) {
          audioRef.current.pause();
          setIsPlaying(false);
          console.debug("Music: HTMLAudio paused via toggle");
        } else {
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // If play fails, fallback to synth
              playMusic().catch(() => {});
            });
        }
      } catch (e) {
        stopMusic();
        console.debug("Music: toggle encountered error", e);
      }
      return;
    }

    if (audioContextRef.current) {
      stopMusic();
      setIsPlaying(false);
      return;
    }

    playMusic().catch(() => {
      // Ignored until a direct user gesture is available.
    });
  };

  // Small modern play/pause button UI
  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 border border-yellow-300/20 text-white shadow-xl transition-transform hover:scale-105"
    >
      {isPlaying ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <rect x="5" y="4" width="4" height="16" rx="1" fill="currentColor" />
          <rect x="15" y="4" width="4" height="16" rx="1" fill="currentColor" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}
