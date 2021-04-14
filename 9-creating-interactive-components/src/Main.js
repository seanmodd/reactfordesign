import React from "react";
import UserProfile from "./UserProfile";
import { Box } from "./Tile";

function Main({ data, isOnline, inputValue }) {
  return (
    <>
      <div onClick={() => isOnline}></div>
      <Box mt={1} mx={1}>
        {data
          .filter(
            (user) =>
              user.name.first.includes(inputValue) ||
              user.name.last.includes(inputValue)
          )
          .filter((user) => (isOnline ? user.status === "Online" : true))
          .map(function (user, i) {
            return <UserProfile key={i} user={user} />;
          })}
      </Box>
    </>
  );
}

export default Main;
