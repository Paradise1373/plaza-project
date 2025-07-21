const ErrorOnFetchApi = ({ message = null }) => {
  return (
    <div>
      <p className='p-4 text-slate-50 bg-red-600 rounded-lg shadow-md text-center capitalize'>
        {message ? message : 'something goes wrong , try again later!'}
      </p>
    </div>
  )
}

export default ErrorOnFetchApi
