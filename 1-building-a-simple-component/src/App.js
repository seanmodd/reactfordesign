import React from 'react';
import UserProfile from './UserProfile';

const App = function(props) {
  return (
    <div>
      {
        Array(20).fill("").map(function() {
          return <UserProfile />
        })
      }
    </div>
  )
}

export default App;
