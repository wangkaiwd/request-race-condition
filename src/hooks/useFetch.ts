import { useRef } from 'react'
import axios from 'axios'

export const useFetch = (service: (...args: any[]) => Promise<any>) => {
  const controllerRef = useRef<AbortController | null>(null)
  return async (...args: any[]) => {
    const controller = controllerRef.current
    if (controller) {
      controller.abort('cancel previous request')
    }
    controllerRef.current = new AbortController()
    try {
      return await service(...args, { signal: controllerRef.current.signal })
    } catch (err: any) {
      if (axios.isCancel(err)) {
        console.log('Request was aborted:', err)
      }
      throw err
    }
  }
}
