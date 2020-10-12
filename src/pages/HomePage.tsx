import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

export function HomePage() {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  let history = useHistory();
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/taniarascia">taniarascia</Link> on GitHub.
      </p>
      <form
        onSubmit={() => {
          console.log(roomName);
          history.push("/" + roomName, { userName: userName });
        }}
      >
        <h1>Hello</h1>
        <p>Enter room name:</p>
        <input
          id="room"
          type="text"
          value={roomName}
          onChange={() => {
            setRoomName(
              (document.getElementById("room") as HTMLInputElement).value
            );
          }}
        />
        <p>Enter your name:</p>
        <input
          id="user"
          type="text"
          value={userName}
          onChange={() => {
            setUserName(
              (document.getElementById("user") as HTMLInputElement).value
            );
          }}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
