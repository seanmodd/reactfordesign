import { keyframes } from 'styled-components'
import { color } from '../Tile'

export const colorChange = function(type) {
  return keyframes`
    0% { ${type}: ${color.purple}; }
    25%  { ${type}: ${color.red}; }
    50% { ${type}: ${color.yellow}; }
    75% { ${type}: ${color.green}; }
    100% { ${type}: ${color.blue}; }
  `
};
