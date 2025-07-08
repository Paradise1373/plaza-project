import useStore from './store'

const App = () => {
  const { access_token, refresh_token } = useStore()

  return (
    <div>
      Access token: {access_token ? access_token : 'no access token is set!'}{' '}
      <br />
      Refresh token: {refresh_token ? refresh_token : 'no access token is set!'}{' '}
    </div>
  )
}

export default App
