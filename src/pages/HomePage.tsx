import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
const React = require("react");

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

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
            setName(document.getElementById("sukeko").value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.history = useHistory();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log(this.state.value);
    // event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={() => this.history.push("/")}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
