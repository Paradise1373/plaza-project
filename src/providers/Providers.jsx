import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getCookie } from '../utils/helpers/cookies'
import router from '../constants/router'
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
  return (
    <RouterProvider router={router}>
      <Authorize>{children}</Authorize>
    </RouterProvider>
  )
}

export default Providers
