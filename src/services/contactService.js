import { useApi } from '../api/ApiProvider'

/**
 * Contact enquiry service.
 * Usage:
 *   const { contact } = useContactService()
 *   const response = await contact(payload)
 */
export function useContactService() {
  const api = useApi()

  const contact = (payload) => api.post('/contact', payload)

  return { contact }
}
