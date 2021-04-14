import React from 'react';
import './user-profile.css';

function UserProfile() {
  return (
    <div className="user-profile-container">
      <img className="user-profile-avatar" src="https://via.placeholder.com/90x90" />
      <h2 className="user-profile-name">Jaden Smith</h2>
      <p className="user-profile-location">San Francisco, CA</p>
    </div>
  );
}

export default UserProfile;
