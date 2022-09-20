import useUser from 'hooks/useUser'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute ({ children, ...rest }) {
  const { isLogged } = useUser()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged
          ? (
              children
            )
          : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
            )}
    />
  )
}
