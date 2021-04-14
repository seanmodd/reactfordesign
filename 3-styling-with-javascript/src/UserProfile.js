import React from 'react';
import styled from 'styled-components';

function UserProfile(props) {
  return (
    <UserProfileContainer>
      <UserProfileStatus status={props.user.status} />
      <UserProfileAvatar src={props.user.picture.medium} />
      <UserProfileName>
        {`${props.user.name.first} ${props.user.name.last}`}
      </UserProfileName>
      <UserProfileLocation>
        {`${props.user.location.city}, ${props.user.location.state}`}
      </UserProfileLocation>
    </UserProfileContainer>
  );
}

const UserProfileContainer = styled.div`
  background-color: #222;
  display: inline-block;
  margin: 20px;
  padding: 25px 10px;
  border-radius: 10px;
  text-align: center;
  transition: 0.15s transform ease;
  cursor: pointer;
  width: 140px;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`

const UserProfileAvatar = styled.img`
  border-radius: 100px;
  margin: 0 auto;
  display: block;
  width: 65px;
`;

const UserProfileName = styled.h2`
  font-size: 15px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

const UserProfileLocation = styled.p`
  text-transform: capitalize;
  opacity: 0.4;
  margin-top: 0;
  font-size: 13px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  display: inline-block;
  margin-bottom: 0;
`;

const UserProfileStatus = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${
    props => statusMap[props.status] ? statusMap[props.status] : statusMap["none"]
  };
  border-radius: 10px;
  position: absolute;
  left: 12px;
  top: 12px;
`;

const statusMap = {
  active: "#1AF042",
  inactive: "#F0AA1A",
  none: "#4A4A4A"
}


export default UserProfile;
