/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Main from "./Main";
import Nav from "./Nav";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) =>
        setData(
          data.results.map((user) => {
            Math.random() > 0.5
              ? (user["status"] = "Online")
              : (user["status"] = "Offline");
            return user;
          })
        )
      );
  }, []);

  return (
    <>
      <Nav
        isOnline={isOnline}
        inputValue={inputValue}
        setIsOnline={setIsOnline}
        setInputValue={setInputValue}
      />
      <Main data={data} isOnline={isOnline} inputValue={inputValue} />
    </>
  );
}

export default App;
