import { useState, useEffect } from "react";
import Width from "../interfaces/width";

export default function useWindowWidth(): Width {
  const [windowSize, setWindowSize] = useState<Width>({
    width: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
