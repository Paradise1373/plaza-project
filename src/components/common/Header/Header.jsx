import { Link } from 'react-router-dom'
import useStore from '../../../store'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LoginIcon from '@mui/icons-material/Login'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Header = () => {
  const { access_token } = useStore()
  return (
    <header className='px-4 my-4'>
      <div className='flex items-center rounded-lg shadow-lg justify-between text-slate-100 bg-slate-600 p-4'>
        <Link to='/' className='capitalize flex gap-1 items-center'>
          <span>react e'commerce</span>
          <LocalMallIcon />
        </Link>
        <Link
          to={`/${
            access_token != null && access_token != undefined
              ? 'dashboard'
              : 'login'
          }`}
          className='flex items-center gap-2 capitalize bg-slate-400 rounded-md px-4 py-2'
        >
          {access_token != null && access_token != undefined ? (
            <>
              <span>Dashboard</span>
              <AccountCircleIcon />
            </>
          ) : (
            <>
              <span>login/signup</span>
              <LoginIcon />
            </>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Header
