import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    function cleanup() {
      clearTimeout(timer)
    }
    return cleanup
  }, [value, delay])

  return debouncedValue
}
