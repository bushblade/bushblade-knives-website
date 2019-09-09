import { useState, useEffect } from 'react'

export const useIsMobile = () => {
  const isMobile = () => {
    if (typeof window !== 'undefined') return window.innerWidth < 780
  }
  const [mobile, setMobile] = useState(isMobile())

  useEffect(() => {
    const checkWindowSize = () => setMobile(isMobile())
    if (window) {
      checkWindowSize()
      window.addEventListener('resize', checkWindowSize)
      return () => window.removeEventListener('resize', checkWindowSize)
    }
  }, [])
  return mobile
}
