import styled from 'styled-components'
import { Btn, color } from '../Tile'
import { colorChange } from './Utils'

export const BtnRainbow = styled(Btn)`
  animation: ${colorChange("background")} 10s infinite alternate;
`

export const BtnLink = styled(Btn)`
  background: none;
  color: ${color.blue};
`
