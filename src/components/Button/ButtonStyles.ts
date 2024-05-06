import { CircularProgress, Button } from '@mui/material'
import styled from 'styled-components'
import { colors, typography } from 'styles'

export const ButtonComponent = styled(Button).attrs(({ type }) => ({
  type,
}))`
  width: 100%;
  height: 100%;
  color: ${colors.WHITE};

  &.MuiButtonBase-root {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;
    text-transform: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    border-radius: 12px;
    border: none;
    font-family: ${typography.FONT_FAMILY_PRIMARY};
    font-size: ${typography.FONT_SIZE_16};
    font-weight: 600;
    line-height: ${typography.LINE_HEIGHT_48};
    background: ${colors.FORMBUTTON};
    box-shadow: 0 8px 8px -4px rgb(245 92 69 / 12%), 0 16px 24px 0 rgb(245 92 69 / 24%),
      0 2px 4px -1px rgb(27 10 82 / 12%), 0 0 1px 0 rgb(245 92 69 / 24%);
    color: ${colors.WHITE};
  }
`

export const Spinner = styled(CircularProgress).attrs({
  size: 20,
})`
  &.MuiCircularProgress-root {
    color: ${colors.WHITE};
  }
`
