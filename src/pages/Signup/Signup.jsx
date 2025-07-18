import SignupForm from "../../components/forms/signupForm/SignupForm"

const Signup = () => {
  return (
    <div className='w-[100vw] h-[100vh] gap-4 bg-slate-100 flex flex-col items-center justify-center '>
      <h1 className='font-bold text-xl'>Signup</h1>
      <SignupForm />
    </div>
  )
}

export default Signup
