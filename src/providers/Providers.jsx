import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import { getCookie } from '../utils/helpers/cookies'

import useStore from '../store'

const Authorize = ({ children }) => {
  const { setState } = useStore()

  useEffect(() => {
    const readCookies = async () => {
      const result = await getCookie('credential')
      setState(result)
    }
    readCookies()
  }, [])

  return <>{children}</>
}

const Providers = ({ children }) => {
  return (
    <Authorize>
      {children}
      <ToastContainer />
    </Authorize>
  )
}

export default Providers
