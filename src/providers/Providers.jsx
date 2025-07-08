import { useEffect } from 'react'
import { getCookie, setCookie } from '../utils/helpers/cookies'

import useStore from '../store'

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
  return <Authorize>{children}</Authorize>
}

export default Providers
