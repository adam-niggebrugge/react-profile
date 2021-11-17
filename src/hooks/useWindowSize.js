//from https://folio-gatsby-live.netlify.app/devloper-1
import { useState, useEffect, useCallback } from "react";

// Hook
export const useWindowSize = () => {
  const isClient = typeof window === "object";
  
  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, [isClient]);
  //Boiler plate React style of holding state
  const [windowSize, setWindowSize] = useState(getSize());
  //Tells the hook when it should fire again,
  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(getSize);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]);

  return windowSize;//makes the app appear smart with considering the multiple sizes browswers can be squeezed into
};
