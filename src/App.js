import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contacts />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
