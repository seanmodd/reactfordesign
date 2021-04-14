import styled from "styled-components";
import { color, space, size, margin, padding, position } from "./Utils";

export const InputLight = styled.input`
  background-color: white;
  font-family: inherit;
  padding: ${space[1] + 5 + "px"};
  font-size: 17px;
  border-radius: 8px;
  border: none;
  outline: none;
  color: ${color.gray2};
  margin-right: 10px;
  transition: 0.2s all ease;
  opacity: 0.9;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &::-webkit-input-placeholder {
    color: ${color.gray0};
  }

  ${margin}
  ${padding}
  ${position}
  ${size}
`;

export const InputDark = styled(InputLight)`
  background-color: ${color.gray2};
  color: ${color.white};

  &:focus {
    border-color: ${color.gray1};
  }
`;
