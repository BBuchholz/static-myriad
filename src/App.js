import './App.css';
import SplashScreen from './SplashScreen';
import SandboxEntryForm from './SandboxEntryForm';

import React from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Router>
                <Container className="p-3">
                    <Jumbotron>
                        <h1 className="header">Welcome To React-Bootstrap</h1>
                        <h2>
                            Current Page is{' '}
                            <Switch>
                                <Route path="/about">
                                    <SplashScreen />
                                </Route>
                                <Route path="/users">
                                    <Wxrds />
                                </Route>
                                <Route path="/">
                                    <SandboxEntryForm />
                                </Route>
                            </Switch>
                        </h2>
                        <h2>
                            Navigate to{' '}
                            <ButtonToolbar className="custom-btn-toolbar">
                                <LinkContainer to="/">
                                    <Button>Home</Button>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Button>About</Button>
                                </LinkContainer>
                                <LinkContainer to="/wxrds">
                                    <Button>Wxrds</Button>
                                </LinkContainer>
                            </ButtonToolbar>
                        </h2>
                    </Jumbotron>
                </Container>
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
