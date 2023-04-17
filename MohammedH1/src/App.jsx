import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features_revamp } from "./components/features_revamp";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Certificates } from "./components/certificates";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
        <Features_revamp data={landingPageData.Features_revamp} />
      <Services data={landingPageData.Services} />
        <About data={landingPageData.About} />

      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
