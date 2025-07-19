import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import useStore from '../../store'

const Dashboard = () => {
  const { access_token } = useStore()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (access_token) {
  //     toast.warn('you are not logged in!')
  //     navigate('/login')
  //   }
  // }, [])
  return (
    <div>
      {access_token ? (
        <p>Content</p>
      ) : (
        <Link to='/login' className='underline'>
          Only Logged in Users Can Access
        </Link>
      )}
    </div>
  )
}

export default Dashboard
