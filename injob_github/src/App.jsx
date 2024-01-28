import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/Custom.css";
import "./styles/Mobile.css";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import Work from "./components/home/Work";
import Track from "./components/home/Track";
import Finger from "./components/home/Finger";
import Waitlist from "./components/home/Waitlist";
import Faq from "./components/home/Faq";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Track />
      <Finger />
      <Waitlist />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
