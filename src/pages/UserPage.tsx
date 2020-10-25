import React, { useState, useEffect } from "react";
import axios from "axios";
import { RouteComponentProps, useHistory } from "react-router-dom";

type IndexProps = RouteComponentProps<
  { roomName: string },
  {},
  { userName: string }
>;

export default function UserPage(props: IndexProps) {
  let history = useHistory();
  if (!props.location.state) {
    history.push("/", { roomName: props.match.params.roomName });
  }
  const initialUserState = {
    user: {},
    loading: true,
    name: undefined,
    location: undefined,
    blog: "",
    followers: undefined,
  };

  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(
        `https://api.github.com/users/${props.match.params.roomName}`
      );

      setUser(data);
    };

    getUser();
  }, [props.match.params.roomName]);

  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{props.match.params.roomName}</h1>
      <h1>{props.location.state.userName}</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.blog}>{user.blog}</a>
            </td>
            <td>{user.followers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
