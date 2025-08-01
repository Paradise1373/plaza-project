import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from 'react-toastify'

import { zodResolver } from '@hookform/resolvers/zod'

import useStore from '../../../store'

import createUsersApi from '../../../utils/apis/users/createUsersApi'

const loginSchema = z
  .object({
    name: z.string(4, 'at least 4 character!'),
    email: z
      .string()
      .min(1, 'it cant be empty!')
      .email('Please, enter a valid email!'),
    password: z.string().min(4, 'at least 4 character!'),
    avatar: z.string(),
    gender: z.string(),
  })
  .refine(
    (data) =>
      (data.avatar = `https://avatar.iran.liara.run/public/${data.gender}`)
  )

const SignupForm = () => {
  const { access_token } = useStore()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) })

  useEffect(() => {
    if (access_token != null && access_token != undefined) {
      toast.warn('you are already logged in!')
      navigate('/dashboard')
    }
  }, [])

  const handleSignup = async (data) => {
    const result = await createUsersApi(data)

    if (result?.status === 200 || result?.status === 201) {
      toast.success('register successfully, redirecting to login ...')
      setTimeout(() => navigate('/login'), 2000)
    } else toast.error('something goes wrong, please try later!')
  }

  return (
    <form
      onSubmit={handleSubmit(async (data) => await handleSignup(data))}
      className='p-4 lg:w-[33%] w-[80%] rounded-xl shadow-md border-2'
    >
      <fieldset disabled={isSubmitting} className='flex gap-4 flex-col'>
        <input type='hidden' name='avatar' {...register('avatar')} />
        <input
          {...register('name')}
          className={`${
            errors?.name?.message ? 'border-red-400' : 'border-slate-400'
          } w-[100%] px-4 py-2 border-2 focus:border-slate-600 rounded-md`}
          type='text'
          name='name'
          id='name'
          placeholder='Enter name'
        />
        {errors?.name?.message && (
          <p className='text-red-600'>{errors.name.message}</p>
        )}
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
        <div className='flex flex-col'>
          <div className='flex gap-4'>
            <input
              {...register('gender')}
              type='radio'
              defaultChecked
              value='boy'
              name='gender'
              id='male'
            />
            <label htmlFor='male'>Male</label>
          </div>
          <div className='flex gap-4'>
            <input
              {...register('gender')}
              type='radio'
              value='girl'
              name='gender'
              id='female'
            />
            <label htmlFor='female'>Female</label>
          </div>
        </div>
        <button
          className='w-[100%] bg-slate-700 text-slate-50 rounded-md px-4 py-2'
          type='submit'
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
        <Link className='text-center underline text-xs' to='/login'>
          have a account? log in
        </Link>
      </fieldset>
    </form>
  )
}

export default SignupForm
