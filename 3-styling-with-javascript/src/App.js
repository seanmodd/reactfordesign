import React from 'react';
import UserProfile from './UserProfile';
import userData from './data.js';

const App = function() {
  return (
    <div style={{ marginTop: 20 }}>
      {userData.map(function(User, i) {
        return <UserProfile user={User} key={i} />
      })}
    </div>
  );
}

export default App;
