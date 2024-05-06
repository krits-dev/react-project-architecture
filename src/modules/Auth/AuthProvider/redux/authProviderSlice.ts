import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAuthProviderState {
  isAuthenticated: boolean
  personId: string
  token: string
}

const authProviderInitialState: IAuthProviderState = {
  isAuthenticated: false,
  personId: '',
  token: '',
}

const authProviderSlice = createSlice({
  name: 'AUTH',
  initialState: authProviderInitialState,
  reducers: {
    setAuthenticatedData: (state: IAuthProviderState, { payload }: PayloadAction<any>) => {
      const { isAuthenticated, person, token } = payload
      state.isAuthenticated = isAuthenticated
      state.personId = person
      state.token = token
    },
    signoutRequest: (state: IAuthProviderState, { payload }: PayloadAction<any>) => {},
    signout: () => authProviderInitialState,
  },
})

export const authProviderActionTypes = authProviderSlice.actions

export default authProviderSlice.reducer
