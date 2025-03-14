'use client'


import {useEffect, useState, useCallback  } from "react";


const useResponsive = (query: string): boolean => {

  function getMatches(query:string): boolean {
   if(typeof window !== "undefined")  {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  const handleChange = useCallback(() => {
    setMatches(getMatches(query))
  }, [query])

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange) 
    }
  }, [query, handleChange])
  
  
  return matches
}

export default useResponsive
