import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import { getCookie } from '../utils/helpers/cookies'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useStore from '../store'

const queryClient = new QueryClient()

const Authorize = ({ children }) => {
  const { setState } = useStore()

  useEffect(() => {
    const readCookies = async () => {
      const result = await getCookie('credential')
      setState(result)
      console.log(result)
    }
    readCookies()
  }, [])

  return <>{children}</>
}

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Authorize>
        {children}
        <ToastContainer />
      </Authorize>
    </QueryClientProvider>
  )
}

export default Providers
