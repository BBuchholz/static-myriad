import './App.scss';
import SplashScreen from './SplashScreen';
import SandboxEntryForm from './SandboxEntryForm';
import OldMyriadNavBar from './OldMyriadNavBar';
import OldMyriadXmlIOPanel from './OldMyriadXmlIOPanel';
import OldMyriadLogEntryForm from './OldMyriadLogEntryForm';
import MyriadNavBarMain from './MyriadNavBarMain';
import WxrdsView from './WxrdsView';
import LogEntries from './LogEntries';
import NotesView from './NotesView';

import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Container from 'react-bootstrap/Container';

function App() {
    return (
        <Router>
            <Container fluid="md">
                <MyriadNavBarMain />
                <OldMyriadNavBar />
                    <h2>
                        <Switch>
                            <Route path="/wxrds">
                                <WxrdsView />
                            </Route>
                            <Route path="/entries">
                                <LogEntries />
                            </Route>
                            <Route path="/xmlio">
                                <OldMyriadXmlIOPanel />
                            </Route>
                            <Route path="/log-entry-prev">
                                <SandboxEntryForm />
                            </Route>
                            <Route path="/log-entry">
                                <OldMyriadLogEntryForm />
                            </Route>
                            <Route path="/notes">
                                <NotesView />
                            </Route>
                            <Route path="/">
                                <SplashScreen />
                            </Route>
                        </Switch>
                    </h2>
            </Container>
        </Router>
    );
}

export default App;
