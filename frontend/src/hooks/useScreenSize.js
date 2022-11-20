import React, { useState, useEffect } from 'react'

const useScreenSize = () => {

    let [widthResize, setWidthResize] = useState();
    let [heightResize, setHeightResize] = useState();

    const HandleResize = () => {
        setWidthResize(window.innerWidth);
        setHeightResize(window.innerHeight);
    }

    useEffect(() => {
      window.addEventListener("resize", HandleResize);
    
      return () => {
        window.removeEventListener("resize", HandleResize);
      }
    }, [])
    
  return {
    widthResize,
    heightResize
  }
}

export default useScreenSize;