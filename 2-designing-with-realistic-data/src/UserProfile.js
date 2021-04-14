import React from 'react';
import './user-profile.css'

function UserProfile(props)  {
  return (
    <div className="user-profile-container">
      <div
        className={`user-profile-status user-profile-status-${props.user.status}`}
      />

      { props.user.picture.medium ? (
        <img
          className="user-profile-avatar"
          src={props.user.picture.medium}
          alt={`${props.user.name.first} ${props.user.name.last}`}
        />
      ) : (
        <Placeholder first={props.user.name.first} last={props.user.name.last} />
      )}


      <h2 className="user-profile-name">
        {`${props.user.name.first} ${props.user.name.last}`}
      </h2>

      <p className="user-profile-location">
        {`${props.user.location.city}, ${props.user.location.state}`}
      </p>
    </div>
  );
}

const Placeholder = function(props) {
  const first = props.first.charAt(0).toUpperCase();
  const last = props.last.charAt(0).toUpperCase();

  return (
    <div className="user-profile-placeholder">{first + last}</div>
  )
}

export default UserProfile;
