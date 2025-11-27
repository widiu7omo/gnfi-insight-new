/**
 * Optional persistence utilities for manual save/load
 * Use these when you want to persist state without automatic syncing
 */

// Simple localStorage helpers (if you want manual persistence)
export const saveToStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save to localStorage:', error)
  }
}

export const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Failed to load from localStorage:', error)
    return defaultValue
  }
}

export const clearStorage = (key: string): void => {
  localStorage.removeItem(key)
}

// Debounced save helper - prevents too many saves
export const createDebouncedSave = <T>(
  key: string,
  delay = 1000
): ((data: T) => void) => {
  let timeoutId: NodeJS.Timeout | null = null

  return (data: T) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      saveToStorage(key, data)
    }, delay)
  }
}

// Example usage:
// const debouncedSaveBlocks = createDebouncedSave('blocks', 2000)
// debouncedSaveBlocks(blocksData) // Will save after 2 seconds of no more calls
