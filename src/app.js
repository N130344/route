import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import { Topics } from "./components/topics";

export default function App() {
  return (
      <div>
         <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
        <Route exact path="/" component={Home} />
        {/* <Route path="/form" component={Form} /> */}
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        {/* <Form /> */}
    </Router>

      </div>
  );
}


