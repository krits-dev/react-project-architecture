import { all, put, delay, takeLatest } from 'redux-saga/effects'

import { testSliceActionTypes } from './testSlice'

export function* testSubmitForm() {
  yield delay(3000)
  yield put(testSliceActionTypes.testSubmitSuccess())
}

function* testSaga() {
  yield all([takeLatest(testSliceActionTypes.testSubmitRequest, testSubmitForm)])
}

export default testSaga
