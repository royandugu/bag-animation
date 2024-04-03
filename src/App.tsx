import Lenis from '@studio-freight/lenis';
import FirstSection from './components/firstSection/firstSection'
import SecondSection from './components/secondSection/secondSection'

import { useState, useEffect } from 'react';

import './App.css'

function App() {

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

    // Define a recursive animation function using requestAnimationFrame
    function raf(time: any) {
        lenis.raf(time); // Update the Lenis instance with the current time
        requestAnimationFrame(raf); // Request the next animation frame
    }

    requestAnimationFrame(raf); // Start the animation loop by calling requestAnimationFrame with raf

    return () => lenis.destroy();
}, []);

  return (
    <>  
      <FirstSection/>
      <SecondSection/>
    </>
  )
}

export default App
