import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import loginApi from '../../../utils/apis/auth/loginApi'
import { setCookie } from '../../../utils/helpers/cookies'
import useStore from '../../../store'

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
  .refine((data) => console.log(data))

const SignupForm = () => {
  const { setState } = useStore()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) })
  const navigate = useNavigate()

  const handleSignup = async (data) => {
    console.log(data)
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
          {isSubmitting ? 'Logging...' : 'Login'}
        </button>
      </fieldset>
    </form>
  )
}

export default SignupForm
