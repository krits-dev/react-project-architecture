import { memo, MouseEvent } from 'react'
import { ButtonComponent, Spinner } from './ButtonStyles'

interface IButtonProps {
  disabled?: boolean
  isFetching?: boolean
  text: string
  onClickAction?: (e: MouseEvent<any>) => void
  type?: 'button' | 'submit'
}

function Button({ disabled, isFetching, text, onClickAction, type = 'button' }: IButtonProps) {
  return (
    <ButtonComponent disableRipple onClick={onClickAction} disabled={disabled} type={type}>
      {isFetching ? <Spinner /> : text}
    </ButtonComponent>
  )
}

export default memo(Button)
