import { useState, useEffect, useRef } from 'react'

export function useClickOutside <T> () {
  const [toggle, setToggle] = useState(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const box = ref.current
      if (!box) return

      const isTarget = box?.contains(event.target as Node)
      if (!isTarget) setToggle(false)
    }

    window.document.addEventListener('click', handleClickOutside)
    return () => {
      window.document.removeEventListener('click', handleClickOutside)
    }
  }, [toggle])

  const updateToggle = (newToggle: boolean) => {
    setToggle(newToggle)
  }

  return {
    toggle,
    ref,
    updateToggle
  }
}
