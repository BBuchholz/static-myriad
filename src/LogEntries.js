import React from 'react';
import { 
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function LogEntries() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>LogEntries</h2>

      <ul>
        <li>
          <Link to={`${match.url}/entries`}>Entries</Link>
        </li>
        <li>
          <Link to={`${match.url}/tags`}>
            Tags
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:logEntryUuid`}>
          <LogEntry />
        </Route>
        <Route path={match.path}>
          <h3>Please select a LogEntry.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function LogEntry() {
  let { logEntryUuid } = useParams();
  return <h3>Requested LogEntry UUID: {logEntryUuid}</h3>;
}

export default LogEntries;