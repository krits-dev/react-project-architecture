import { call } from 'redux-saga/effects'

export const getStatusCode = (error: any): number | string | undefined => {
  if (error?.response) {
    return error.response.status
  }

  if (error.request) {
    return error && error.code === 'ECONNABORTED' ? 'timeout' : 400
  }
}

export const sagaRequestWrapper = (
  saga: any,
  data?: any,
  shouldSkipDefaultErrorHandling?: (error: Error) => boolean | void
) =>
  call(function* sagaRequest() {
    try {
      const response: any = yield call(saga, data)

      return { response }
    } catch (error) {
      if (
        shouldSkipDefaultErrorHandling === undefined ||
        !shouldSkipDefaultErrorHandling(error as Error)
      ) {
        // Add some COMMON error handler
      }

      return { error }
    }
  })
