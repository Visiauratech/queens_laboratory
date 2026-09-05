import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Toast from '../components/ui/Toast'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)

  const hide = useCallback(() => setToast(null), [])

  const notifySuccess = useCallback((line1 = 'form submitted', line2 = 'successfully') => {
    setToast({ type: 'success', line1, line2 })
  }, [])

  const notifyFailure = useCallback((line1 = 'submission failed', line2 = 'please retry') => {
    setToast({ type: 'failure', line1, line2 })
  }, [])

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(hide, 3800)
    return () => clearTimeout(timer)
  }, [toast, hide])

  return (
    <ToastContext.Provider value={{ notifySuccess, notifyFailure, hide }}>
      {children}
      {toast && <Toast type={toast.type} line1={toast.line1} line2={toast.line2} onClose={hide} />}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return ctx
}
