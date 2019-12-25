import React from 'react'
import {Link,Route } from 'react-router-dom'
const Topics = ({ match,location },props) =>{
  return (
      <div>
        <h2>Topics</h2>
        <ul>
          <h1>{JSON.stringify(location.state)}</h1>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
          <Route path={`${match.path}/:topicId`} component={Topic} />
          <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
          />
      </div>
    );
}

const Topic = ({ match }) => {
    return (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
    );
}
export { Topics, Topic}