import { createSelector } from '@reduxjs/toolkit'

import { IAuthProviderState } from './authProviderSlice'

const authSelector = (state: any) => state.authProvider

export const getAuthenticatedStatus = createSelector(
  authSelector,
  ({ isAuthenticated }: IAuthProviderState) => isAuthenticated
)

export const personIdSelector = createSelector(
  authSelector,
  ({ personId }: IAuthProviderState) => personId
)

export const tokenSelector = createSelector(authSelector, ({ token }: IAuthProviderState) => token)
