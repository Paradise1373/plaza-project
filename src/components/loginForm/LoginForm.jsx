import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import loginApi from '../../utils/apis/auth/loginApi'
import { setCookie } from '../../utils/helpers/cookies'
import useStore from '../../store'

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'it cant be empty!')
    .email('Please, enter a valid email!'),
  password: z.string().min(1, 'it cant be empty!'),
})

const LoginForm = () => {
  const { setState } = useStore()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) })
  const navigate = useNavigate()

  const handleLogin = async (data) => {
    const result = await loginApi(data)
    if (result?.status === 200 || result?.status === 201) {
      const access_token = result?.data?.access_token
      const refresh_token = result?.data?.refresh_token

      await setCookie('credential', {
        access_token: access_token,
        refresh_token: refresh_token,
      })
      setState({ access_token: access_token, refresh_token: refresh_token })

      toast.success('logged in successfully!, redirecting to dashboard...')
      setTimeout(() => navigate('/dashboard'), 1000)
    } else {
      toast.error('Invalid Username Password!')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(async (data) => await handleLogin(data))}
      className='p-4 lg:w-[33%] w-[80%] rounded-xl shadow-md border-2'
    >
      <fieldset disabled={isSubmitting} className='flex gap-4 flex-col'>
        <input
          {...register('email')}
          className={`${
            errors?.email?.message ? 'border-red-400' : 'border-slate-400'
          } w-[100%] px-4 py-2 border-2 focus:border-slate-600 rounded-md`}
          type='text'
          name='email'
          id='email'
          placeholder='Enter Email'
        />
        {errors?.email?.message && (
          <p className='text-red-600'>{errors.email.message}</p>
        )}
        <input
          {...register('password')}
          className={`${
            errors?.email?.message ? 'border-red-400' : 'border-slate-400'
          } w-[100%] px-4 py-2 border-2 focus:border-slate-600 rounded-md`}
          type='password'
          name='password'
          id='password'
          placeholder='Enter Password'
        />
        {errors?.password?.message && (
          <p className='text-red-600'>{errors.password.message}</p>
        )}
        <button
          className='w-[100%] bg-slate-700 text-slate-50 rounded-md px-4 py-2'
          type='submit'
        >
          {isSubmitting ? 'Logging...' : 'Login'}
        </button>
      </fieldset>
    </form>
  )
}

export default LoginForm
