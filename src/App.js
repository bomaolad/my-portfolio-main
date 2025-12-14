import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contacts from "./components/Contacts";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contacts />
    </div>
  );
}

export default App;
