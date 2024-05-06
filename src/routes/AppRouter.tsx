import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { getAuthenticatedStatus } from 'modules/Auth/AuthProvider/redux/selectors'

import PrivateRoute from './PrivateRoute'
import routes from './routes'

interface AppRouterProps {
  component: FC
  isPrivate?: boolean
  path: string
  exact?: boolean
}

function AppRouter() {
  const isAuthenticated = useSelector(getAuthenticatedStatus)

  return (
    <Switch>
      {routes?.map(({ isPrivate, path, exact, component }: AppRouterProps) =>
        isPrivate ? (
          <PrivateRoute
            key={`${path}-${Boolean(exact)}`}
            path={path}
            component={component}
            exact={exact}
            isAuthenticated={isAuthenticated}
          />
        ) : (
          <Route
            key={`${path}-${Boolean(exact)}`}
            path={path}
            component={component}
            exact={exact}
          />
        )
      )}
    </Switch>
  )
}

export default AppRouter
