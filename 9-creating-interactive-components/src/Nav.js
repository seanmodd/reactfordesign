import React from "react";
import styled, { css } from "styled-components";
import { InputDark, color } from "./Tile";

const NavContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${color.gray2};
  background-color: #000;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const FilterButton = styled.button`
  border-radius: 40px;
  background-color: transparent;
  border: 2px solid ${color.gray2};
  color: ${color.green};
  display: flex;
  align-items: center;
  font-size: 17px;
  padding: 0px 28px;
  cursor: pointer;
  font-weight: bold;
  outline: none;

  &:hover {
    background-color: ${color.gray2};
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${color.green};
      color: black;
      border-color: ${color.green};

      &:hover {
        background-color: ${color.green};
      }
    `}
`;

function Nav({ isOnline, inputValue, setIsOnline, setInputValue }) {
  return (
    <NavContainer>
      <InputDark
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        w={400}
        placeholder="Friend Search"
      />
      <FilterButton onClick={() => setIsOnline(!isOnline)} active={isOnline}>
        Online
      </FilterButton>
    </NavContainer>
  );
}

export default Nav;
