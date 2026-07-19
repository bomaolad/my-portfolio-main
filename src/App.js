import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Works from './components/sections/Works';
import Contacts from './components/sections/Contacts';
import Footer from './components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Works />
          <Contacts />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
