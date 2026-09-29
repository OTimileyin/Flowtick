import { useEffect, useState } from 'react'

export function usePath() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    function handlePopState() {
      setPath(window.location.pathname)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return path
}

export function navigate(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
