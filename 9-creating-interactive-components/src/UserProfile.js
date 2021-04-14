import React from "react";
import styled, { css } from "styled-components";
import { Text, color } from "./Tile";

const Container = styled.div`
  background-color: #222;
  display: inline-block;
  margin: 10px;
  padding: 40px 15px;
  border-radius: 16px;
  text-align: center;
  transition: 0.15s transform ease;
  cursor: pointer;
  width: 188px;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const StatusIndicator = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.status === "Online" ? color.green : color.gray1};
  position: absolute;
  left: 16px;
  top: 16px;

  ${(props) =>
    props.status === "Online" &&
    css`
      box-shadow: 0 0 10px ${color.green};
    `}
`;

const Avatar = styled.img`
  border-radius: 100px;
  margin: 0 auto;
  display: block;
  width: 90px;
`;

function UserProfile({ user }) {
  return (
    <Container>
      <StatusIndicator status={user.status} />
      <Avatar src={user.picture.medium} />
      <Text
        truncate
        fontWeight="bold"
        fontSize={"17px"}
        mt={2}
      >{`${user.name.first} ${user.name.last}`}</Text>
      <Text
        truncate
        fontWeight="bold"
        o={0.4}
      >{`${user.location.city}, ${user.location.state}`}</Text>
    </Container>
  );
}

export default UserProfile;
