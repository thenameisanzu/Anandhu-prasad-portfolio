'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

/**
 * InteractiveGridPattern Component
 * An interactive background grid pattern where cells dynamically illuminate as the pointer moves across.
 * Inspired by Magic UI & 21st.dev interactive-grid-pattern.
 */
export function InteractiveGridPattern({
  width = 44,
  height = 44,
  className = '',
  squaresClassName = '',
  ...props
}) {
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [hoveredSquare, setHoveredSquare] = useState(null)

  useEffect(() => {
    if (!containerRef.current) return

    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateSize()
    const observer = new ResizeObserver(updateSize)
    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  const horizontal = Math.max(1, Math.ceil(dimensions.width / width))
  const vertical = Math.max(1, Math.ceil(dimensions.height / height))

  const handlePointer = useCallback(
    (clientX, clientY) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const col = Math.floor(x / width)
        const row = Math.floor(y / height)
        if (col >= 0 && col < horizontal && row >= 0 && row < vertical) {
          const index = row * horizontal + col
          setHoveredSquare(index)
        }
      }
    },
    [width, height, horizontal, vertical]
  )

  useEffect(() => {
    const parent = containerRef.current?.parentElement
    if (!parent) return

    const onPointerMove = (e) => {
      handlePointer(e.clientX, e.clientY)
    }
    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY)
      }
    }
    const onLeave = () => setHoveredSquare(null)

    parent.addEventListener('pointermove', onPointerMove, { passive: true })
    parent.addEventListener('touchmove', onTouchMove, { passive: true })
    parent.addEventListener('pointerleave', onLeave)
    parent.addEventListener('touchend', onLeave)

    return () => {
      parent.removeEventListener('pointermove', onPointerMove)
      parent.removeEventListener('touchmove', onTouchMove)
      parent.removeEventListener('pointerleave', onLeave)
      parent.removeEventListener('touchend', onLeave)
    }
  }, [handlePointer])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 h-full w-full overflow-hidden select-none pointer-events-none ${className}`}
      {...props}
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <svg
          width={width * horizontal}
          height={height * vertical}
          className="h-full w-full pointer-events-none"
        >
          {Array.from({ length: horizontal * vertical }).map((_, index) => {
            const x = (index % horizontal) * width
            const y = Math.floor(index / horizontal) * height
            const isHovered = hoveredSquare === index

            return (
              <rect
                key={index}
                x={x}
                y={y}
                width={width}
                height={height}
                className={`stroke-black/[0.06] transition-all duration-100 ease-in-out not-[&:hover]:duration-1000 ${
                  isHovered ? 'fill-black/[0.09]' : 'fill-transparent'
                } ${squaresClassName}`}
              />
            )
          })}
        </svg>
      )}
    </div>
  )
}

export default InteractiveGridPattern
