import { useState, useEffect } from 'react'

export function useDominantColor(imageUrl: string | undefined) {
  const [color, setColor] = useState<string>('59, 130, 246') // default blue

  useEffect(() => {
    if (!imageUrl) return

    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = imageUrl

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Use a small canvas for better performance
        canvas.width = 100
        canvas.height = 100
        ctx.drawImage(img, 0, 0, 100, 100)

        const imageData = ctx.getImageData(0, 0, 100, 100).data

        // Sample colors and find the most vibrant/saturated one
        const colorMap: { [key: string]: number } = {}

        for (let i = 0; i < imageData.length; i += 4 * 10) { // Sample every 10th pixel
          const r = imageData[i]
          const g = imageData[i + 1]
          const b = imageData[i + 2]

          // Skip very dark or very light colors
          const brightness = (r + g + b) / 3
          if (brightness < 30 || brightness > 225) continue

          // Calculate saturation to prefer vibrant colors
          const max = Math.max(r, g, b)
          const min = Math.min(r, g, b)
          const saturation = max === 0 ? 0 : (max - min) / max

          if (saturation > 0.3) { // Only consider saturated colors
            const key = `${Math.round(r / 10) * 10},${Math.round(g / 10) * 10},${Math.round(b / 10) * 10}`
            colorMap[key] = (colorMap[key] || 0) + saturation
          }
        }

        // Find the most common vibrant color
        let dominantColor = '59, 130, 246'
        let maxCount = 0

        for (const [colorKey, count] of Object.entries(colorMap)) {
          if (count > maxCount) {
            maxCount = count
            dominantColor = colorKey
          }
        }

        setColor(dominantColor)
      } catch (error) {
        // If CORS fails or any other error, keep default color
        console.warn('Could not extract dominant color:', error)
      }
    }

    img.onerror = () => {
      // Keep default color on error
      console.warn('Image failed to load for color extraction')
    }
  }, [imageUrl])

  return color
}
