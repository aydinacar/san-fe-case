import { useState, useEffect, useRef } from 'react'
const useMouseEvent = (mode: 'add' | 'remove') => {
  const [color, setColor] = useState(mode === 'add' ? '#64c86420' : '#c8646420')
  const el = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onMouseOver = (e: MouseEvent) => {
      let l = 0
      function updateColor(newl: number) {
        l = newl
        setColor(`${mode === 'add' ? '#64c864' : '#c86464'}${20 + l * 5}`)
        if (l < 10) {
          setTimeout(() => updateColor(l + 1), 25)
        }
      }
      setTimeout(() => updateColor(l + 1), 25)
    }
    const onMouseLeave = (e: MouseEvent) => {
      setColor(mode === 'add' ? '#64c86420' : '#c8646420')
    }
    const node = el.current
    if (node) {
      node.addEventListener('mouseover', onMouseOver)
      node.addEventListener('mouseleave', onMouseLeave)
    }
    return () => {
      if (node) {
        node.removeEventListener('mouseover', onMouseOver)
        node.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [el, mode])

  return { color, el }
}

export default useMouseEvent
