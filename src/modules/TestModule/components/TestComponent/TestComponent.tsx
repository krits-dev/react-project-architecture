import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'components'
import { isFetchingSelector } from 'modules/TestModule/redux/selectors'
import { testSliceActionTypes } from 'modules/TestModule/redux/testSlice'

import { ButtonControl, TestComponentWrapper } from './TestComponentStyles'

function TestComponent() {
  const { t } = useTranslation(['translation-en'])
  const dispatch = useDispatch()
  const isFetching: boolean = useSelector(isFetchingSelector)

  const onClickAction = () => {
    dispatch(testSliceActionTypes.testSubmitRequest())
  }

  console.log(isFetching)

  return (
    <TestComponentWrapper>
      <ButtonControl>
        <Button
          text={t('testPage.buttonName')}
          disabled={isFetching}
          isFetching={isFetching}
          onClickAction={onClickAction}
        />
      </ButtonControl>
    </TestComponentWrapper>
  )
}

export default TestComponent
