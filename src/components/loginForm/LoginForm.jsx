import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const loginSchema = z.object({
  email: z.string().email('enter a valid email').min(1, 'it cant be empty!'),
  password: z.string().min(1, 'it cant be empty!'),
})

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) })

  const handleLogin = async (data) => {}

  return (
    <form
      onSubmit={handleSubmit(async (data) => await handleLogin(data))}
      className='flex gap-4 flex-col p-4 lg:w-[33%] w-[80%] rounded-xl shadow-md border-2'
    >
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
        Login
      </button>
    </form>
  )
}

export default LoginForm
