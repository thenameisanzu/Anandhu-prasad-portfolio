'use client'

import React, { useState, useEffect, useRef } from 'react'

/**
 * High-Performance Interactive Grid Pattern
 * Uses GPU-accelerated SVG <pattern> (1 DOM node instead of 1000+ nodes)
 * and a smooth, throttled radial cursor spotlight.
 */
export function InteractiveGridPattern({
  width = 44,
  height = 44,
  className = '',
  squaresClassName = '',
  ...props
}) {
  const containerRef = useRef(null)
  const [pointer, setPointer] = useState({ x: -1000, y: -1000, active: false })
  const rafId = useRef(null)

  useEffect(() => {
    const parent = containerRef.current?.parentElement
    if (!parent) return

    const handleMove = (clientX, clientY) => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setPointer({
          x: clientX - rect.left,
          y: clientY - rect.top,
          active: true,
        })
      })
    }

    const onPointerMove = (e) => handleMove(e.clientX, e.clientY)
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }
    const onLeave = () => {
      setPointer((prev) => ({ ...prev, active: false }))
    }

    parent.addEventListener('pointermove', onPointerMove, { passive: true })
    parent.addEventListener('touchmove', onTouchMove, { passive: true })
    parent.addEventListener('pointerleave', onLeave, { passive: true })
    parent.addEventListener('touchend', onLeave, { passive: true })

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      parent.removeEventListener('pointermove', onPointerMove)
      parent.removeEventListener('touchmove', onTouchMove)
      parent.removeEventListener('pointerleave', onLeave)
      parent.removeEventListener('touchend', onLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 h-full w-full overflow-hidden select-none pointer-events-none ${className}`}
      {...props}
    >
      {/* GPU Accelerated SVG Pattern - 0 DOM load */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern
            id="hero-grid-pattern"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="var(--grid-stroke)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
      </svg>

      {/* Fluid Interactive Pointer Spotlight */}
      <div
        className="absolute pointer-events-none rounded-full transition-opacity duration-500 ease-out will-change-transform"
        style={{
          width: 380,
          height: 380,
          left: pointer.x,
          top: pointer.y,
          transform: 'translate(-50%, -50%)',
          opacity: pointer.active ? 1 : 0,
          background: 'radial-gradient(circle, var(--grid-glow) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

export default InteractiveGridPattern
