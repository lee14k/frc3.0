'use client'

import {useEffect, useState} from "react";


const useHandleResize = (setIsMobile) => {
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Set initial state based on current window width
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);
}
export default useHandleResize;
