import { useState } from "react";
import LuxuryIntro from "./components/LuxuryIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InvitationCard from "./components/InvitationCard";
import Location from "./components/Location";
import Countdown from "./components/Countdown";
import OurStory from "./components/OurStory";
import Gallery from "./components/Gallery";
import Music from "./components/Music";
// RSVP and Share removed from page per request
import Reactions from "./components/Reactions";
import FooterQuote from "./components/FooterQuote";
import Footer from "./components/Footer";
import InvitationForm from "./components/InvitationForm";

export default function App() {
  const [start, setStart] = useState(false);
  const [musicActive, setMusicActive] = useState(false);

  const handleOpenInvitation = () => {
    setMusicActive(true);
    setStart(true);
  };

  return (
    <div className="overflow-hidden bg-black text-white">
      {!start ? <LuxuryIntro onOpen={handleOpenInvitation} /> : null}

      {start ? (
        <>
          <Navbar />
          <Hero />
          <div id="invitation" className="px-6">
            <InvitationCard />
            <OurStory />
            <Location />
          </div>
          <Gallery />
          <Countdown />
          <InvitationForm
            formUrl={
              "https://docs.google.com/forms/d/e/1FAIpQLSe7qClgLzAHUBN20Py1oJs6sHILwKnAJfkF9bYgEXIhAgtfxQ/viewform?usp=dialog"
            }
          />
          <FooterQuote />
          <Music play={musicActive} />
          <Reactions />
          <Footer />
        </>
      ) : null}
    </div>
  );
}
