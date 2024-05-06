import { FC } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { pageRoutes } from 'constants/pageRoutes'

interface PrivateRouteProps {
  component: FC
  isAuthenticated: boolean
  path: string
  exact?: boolean
}

function PrivateRoute({ component: Component, isAuthenticated, path, exact }: PrivateRouteProps) {
  const renderedComponent = (props: any) => {
    const { location } = props

    return isAuthenticated === true ? (
      <Component {...props} />
    ) : (
      // if User is not authenticated, the app will redirect the User to the pageRoutes.TESTPAGE
      <Redirect push to={{ pathname: pageRoutes.TESTPAGE, state: { from: location } }} />
    )
  }

  return <Route path={path} exact={exact} render={renderedComponent} />
}

export default PrivateRoute
