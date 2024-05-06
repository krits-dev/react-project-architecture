import authProviderReducer from 'modules/Auth/AuthProvider/redux/authProviderSlice'
import testSliceReducer from 'modules/TestModule/redux/testSlice'

const rootReducer = {
  authProvider: authProviderReducer,
  testReducer: testSliceReducer,
}

export default rootReducer
