'use client'

import { useEffect, useState, useCallback } from "react";

/**
 * A custom React hook that detects if a media query matches the current viewport
 * @param query - CSS media query string (e.g. "(max-width: 768px)")
 * @returns boolean indicating if the media query matches
 */
export const useResponsive = (query: string): boolean => {
  /**
   * Check if the media query matches the current viewport
   */
  function getMatches(query: string): boolean {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      const matchMedia = window.matchMedia(query);

      // Set initial value
      handleChange();

      // Add listener for subsequent changes
      matchMedia.addEventListener("change", handleChange);

      // Clean up listener on component unmount
      return () => {
        matchMedia.removeEventListener('change', handleChange);
      };
    }
  }, [query, handleChange]);

  return matches;
};

