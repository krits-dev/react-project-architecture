import { pageRoutes } from 'constants/pageRoutes'
import { TestPage } from 'pages'

const routes = [
  {
    path: pageRoutes.TESTPAGE,
    component: TestPage,
    exact: true,
  },
]

export default routes
