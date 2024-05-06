import { createSlice } from '@reduxjs/toolkit'

export interface ITestState {
  isFetching: boolean
}

const testInitialState: ITestState = {
  isFetching: false,
}

const testProviderSlice = createSlice({
  name: 'TEST',
  initialState: testInitialState,
  reducers: {
    testSubmitRequest: state => {
      state.isFetching = true
    },
    testSubmitSuccess: state => {
      state.isFetching = false
    },
    testSubmitError: state => {
      state.isFetching = false
    },
  },
})

export const testSliceActionTypes = testProviderSlice.actions

export default testProviderSlice.reducer
