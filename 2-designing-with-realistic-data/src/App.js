import React from 'react';
import UserProfile from './UserProfile';
import userData from './data.js';

const App = function() {
  return (
    <div>
      {userData.map(function(User, i) {
        console.log(User);
        return <UserProfile user={User} key={i} />
      })}
    </div>
  );
}

export default App;
