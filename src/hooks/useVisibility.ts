import { useState, useEffect } from "react";
import { useInactivity } from "@/hooks/useInactivity";

export function useVisibility() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isInactive = useInactivity();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, isInactive };
} 