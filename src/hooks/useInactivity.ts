import { useState, useEffect } from "react";

export function useInactivity(timeout: number = 10000) {
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleActivity = () => {
      setIsInactive(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsInactive(true), timeout);
    };

    // Set up event listeners for user activity
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "wheel",
    ];

    events.forEach((event) => {
      document.addEventListener(event, handleActivity);
    });

    // Initial timeout
    timeoutId = setTimeout(() => setIsInactive(true), timeout);

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleActivity);
      });
      clearTimeout(timeoutId);
    };
  }, [timeout]);

  return isInactive;
}
