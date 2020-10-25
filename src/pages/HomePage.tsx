import { Link, RouteComponentProps } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React from "react";

type StateType = {
  roomName: string;
};
type IndexProps = RouteComponentProps<{}, {}, StateType>;

export function HomePage(props: IndexProps) {
  console.log(props);
  const roomNameFromState = props.location.state
    ? props.location.state.roomName
    : "";
  let history = useHistory();
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/taniarascia">taniarascia</Link> on GitHub.
      </p>
      <form
        onSubmit={() => {
          const roomName = (document.getElementById("room") as HTMLInputElement)
            .value;
          const userName = (document.getElementById("user") as HTMLInputElement)
            .value;
          history.push("/" + roomName, { userName: userName });
        }}
      >
        <h1>Hello</h1>
        <p>Enter room name:</p>
        <input id="room" type="text" value={roomNameFromState} />
        <p>Enter your name:</p>
        <input id="user" type="text" value="" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
