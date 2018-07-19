import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

const toProfile = (e, url, history) => {
  e.preventDefault();
  console.log(`url=${url}`);
  history.push("/xyz/profile");
};

const toHome = (e, url, history) => {
  e.preventDefault();
  console.log(`url=${url}`);
  history.push("/xyz/home");
};

const App = ({ match, history }) => (
  <div className="App">
    <h1>Home</h1>
    <h2>Some 🏡 data</h2>
    <button onClick={e => toProfile(e, match.url, history)}>Profile</button>
  </div>
);

const Profile = ({ match, history }) => (
  <div className="App">
    <h1>Profile</h1>
    <h2>Some profile 🙃 data</h2>
    <button onClick={e => toHome(e, match.url, history)}>Profile</button>{" "}
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/xyz/home" component={App} />
      <Route path="/xyz/profile" component={Profile} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
