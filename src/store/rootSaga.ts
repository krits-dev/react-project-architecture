import { all, fork } from 'redux-saga/effects'

import authProviderSaga from 'modules/Auth/AuthProvider/redux/saga'
import testSaga from 'modules/TestModule/redux/saga'

export default function* rootSaga() {
  yield all([fork(authProviderSaga), fork(testSaga)])
}
