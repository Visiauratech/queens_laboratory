import { createContext, useContext, useMemo } from 'react'
import axios from 'axios'

const ApiContext = createContext(null)

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export function ApiProvider({ children }) {
  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      withCredentials: false,
    })

    instance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    )

    instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        const payload = {
          message:
            error.response?.data?.message ||
            error.message ||
            'Something went wrong. Please try again.',
          errors: error.response?.data?.errors || null,
          status: error.response?.status || 0,
        }
        return Promise.reject(payload)
      },
    )

    return {
      get: (url, config) => instance.get(url, config),
      post: (url, data, config) => instance.post(url, data, config),
      put: (url, data, config) => instance.put(url, data, config),
      patch: (url, data, config) => instance.patch(url, data, config),
      delete: (url, config) => instance.delete(url, config),
    }
  }, [])

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
}

export function useApi() {
  const ctx = useContext(ApiContext)
  if (!ctx) {
    throw new Error('useApi must be used within ApiProvider')
  }
  return ctx
}
