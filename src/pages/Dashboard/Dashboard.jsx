import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import useStore from '../../store'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { removeCookie } from '../../utils/helpers/cookies'
import LogoutIcon from '@mui/icons-material/Logout'

import getUserInfoWithTokenApi from '../../utils/apis/users/getUserInfoWithTokenApi'
import DashboardSkeleton from '../../components/skeleton/DashboardSkeleton/DashboardSkeleton'
import ErrorOnFetchApi from '../../components/common/ErrorOnFetchApi/ErrorOnFetchApi'
import Header from '../../components/common/Header/Header'

const Dashboard = () => {
  const { access_token, removeState } = useStore()
  const navigate = useNavigate()

  const { isPending, error, data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfoWithTokenApi(),
    enabled: access_token !== null && access_token !== undefined,
  })

  const handleLogout = () => {
    removeCookie('credential')
    removeState()

    toast.warn('Logged out is successfully , redirecting to login page... ')
    setTimeout(() => navigate('/login'), 2000)
  }

  return (
    <div>
      <Header />
      {access_token !== null && access_token !== undefined ? (
        <>
          {isPending && <DashboardSkeleton />}
          {error && <ErrorOnFetchApi />}
          {data && (
            <>
              <ListItem alignItems='flex-start'>
                <div className='w-[10rem] pe-4'>
                  <img
                    alt='profile image'
                    className='rounded-full object-fit-cover'
                    src={data?.data?.avatar}
                  />
                </div>
                <ListItemText
                  primary={
                    <p className='font-bold'>{`Welcome , ${data?.data?.email} !`}</p>
                  }
                  secondary={
                    <div className='flex flex-col gap-4 mt-4'>
                      <div>
                        <Typography
                          component='span'
                          variant='body2'
                          sx={{ color: 'text.primary', display: 'inline' }}
                        >
                          Name&nbsp; : &nbsp;
                        </Typography>
                        {data?.data?.name}
                      </div>
                      <div>
                        <Typography
                          component='span'
                          variant='body2'
                          sx={{ color: 'text.primary', display: 'inline' }}
                        >
                          Role&nbsp; : &nbsp;
                        </Typography>
                        {data?.data?.role}
                      </div>
                      <div>
                        <Typography
                          component='span'
                          variant='body2'
                          sx={{ color: 'text.primary', display: 'inline' }}
                        >
                          Password&nbsp; : &nbsp;
                        </Typography>
                        {data?.data?.password}
                      </div>
                    </div>
                  }
                />
              </ListItem>
              <>
                <button
                  onClick={handleLogout}
                  className='flex items-center gap-2 text-slate-50 rounded-md shadow-lg bg-red-500 px-4 py-2 ms-4'
                >
                  <span>Logout</span>
                  <LogoutIcon />
                </button>
              </>
            </>
          )}
        </>
      ) : (
        <Link
          className='underline font-stretch-50% flex items-center justify-center p-[2rem] text-xl'
          to='/login'
        >
          <p className='bg-slate-500 text-slate-50 capitalize px-4 py-2 my-16 rounded-md text-xl'>
            Only logged in users can access to dashboard ...
          </p>
        </Link>
      )}
    </div>
  )
}

export default Dashboard
