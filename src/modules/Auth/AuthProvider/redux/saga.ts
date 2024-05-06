import { all, put, takeLatest } from 'redux-saga/effects'

import { authProviderActionTypes } from './authProviderSlice'

export function* signout({
  payload: { withOutRedirect },
}: any | ReturnType<typeof authProviderActionTypes.signoutRequest>) {
  // You should make same api call to signout
  yield put(authProviderActionTypes.signout())

  if (!withOutRedirect) {
    // If the app will need to redicrect a User to some page, make it here using "connected-react-router" push method
  }
}

function* authProviderSaga() {
  yield all([takeLatest(authProviderActionTypes.signoutRequest, signout)])
}

export default authProviderSaga
