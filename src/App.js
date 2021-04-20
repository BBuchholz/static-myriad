import './App.css';
import SplashScreen from './SplashScreen';
import SandboxEntryForm from './SandboxEntryForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <div>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/wxrds">Wxrds</Link>
                </li>
                </ul>

                <Switch>
                <Route path="/about">
                    <SplashScreen />
                </Route>
                <Route path="/Wxrds">
                    <Wxrds />
                </Route>
                <Route path="/">
                    <SandboxEntryForm />
                </Route>
                </Switch>
            </div>
        </Router>

      </header>
    </div>
  );
}


function Wxrds() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Wxrds</h2>

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
        <Route path={`${match.path}/:wxrdUuid`}>
          <Wxrd />
        </Route>
        <Route path={match.path}>
          <h3>Please select a wxrd.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Wxrd() {
  let { wxrdUuid } = useParams();
  return <h3>Requested Wxrd UUID: {wxrdUuid}</h3>;
}

export default App;
