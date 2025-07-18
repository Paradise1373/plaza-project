import LoginForm from '../../components/forms/loginForm'

const Login = () => {
  return (
    <div className='w-[100vw] h-[100vh] gap-4 bg-slate-100 flex flex-col items-center justify-center '>
      <h1 className='font-bold text-xl'>Login</h1>
      <LoginForm />
    </div>
  )
}

export default Login
