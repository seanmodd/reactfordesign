import styled, { css } from 'styled-components';
// Utilities
export const colors = {
  blue: '#0099FF',
  purple: '#F04DFF',
  red: '#FF4D4D',
  green: '#6AED76',
  yellow: '#FFC54D',
  white: '#ffffff',
  gray1: '#606060',
  gray2: '#313131',
  gray3: '#181818',
  black: '#000000',
}

export const space = [
  0,
  8,
  16,
  32,
  64,
  128,
  256,
  512
];

const isDarkBackground = function(color) {
  if (color) {
    if (color.includes("black") || color.includes("gray2") || color.includes("gray3")) {
      return true;
    } else {
      return false;
    }
  }
}

export const Btn = styled.button`
  outline: none;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.2s all ease;
  background-color: ${props => props.color ? colors[props.color] : colors.blue};
  color: ${props => isDarkBackground(props.color) ? colors.white : colors.black};
  font-size: 16px;
  padding: ${space[2]}px ${space[3]}px;

  ${props => props.size === "sm" && css`
    font-size: 14px;
    padding: ${space[1]}px ${space[2]}px;
  `}

  ${props => props.size === "lg" && css`
    font-size: 18px;
    padding: ${space[2] + 6}px ${space[4]}px;
  `}

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border-radius: 4px;
  }
`
