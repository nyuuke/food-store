import { useState, useEffect } from 'react'

export function useMediaQuery(query: number) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${query}px)`)
    media.matches !== matches && setMatches(media.matches)

    const listener = () => {
      setMatches(media.matches)
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}