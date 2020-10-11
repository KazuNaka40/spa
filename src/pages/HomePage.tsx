import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

export function HomePage() {
  const [name, setName] = useState("");
  let history = useHistory();
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/taniarascia">taniarascia</Link> on GitHub.
      </p>
      <form
        onSubmit={() => {
          console.log(name);
          history.push("/" + name);
        }}
      >
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          id="sukeko"
          type="text"
          value={name}
          onChange={() => {
            setName(
              (document.getElementById("sukeko") as HTMLInputElement).value
            );
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
