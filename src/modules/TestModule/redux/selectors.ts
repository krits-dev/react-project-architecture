import { createSelector } from '@reduxjs/toolkit'

import { ITestState } from './testSlice'

const testSelector = (state: any) => state.testReducer

export const isFetchingSelector = createSelector(
  testSelector,
  ({ isFetching }: ITestState) => isFetching
)
