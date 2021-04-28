import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

class OldMyriadNavBar extends React.Component {
    
    render() {
        return(

            <div>
                <h2>
                    <ButtonToolbar className="custom-btn-toolbar">
                        <LinkContainer to="/log-entry-prev">
                            <Button>[PrevLogEntry]</Button>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <Button>[About]</Button>
                        </LinkContainer>
                        <LinkContainer to="/wxrds">
                            <Button>[Wxrds]</Button>
                        </LinkContainer>
                        <LinkContainer to="/xmlio">
                            <Button>[XmlIOPanel]</Button>
                        </LinkContainer>
                        <LinkContainer to="/log-entry">
                            <Button>[LogEntry]</Button>
                        </LinkContainer>
                    </ButtonToolbar>
                </h2>
            </div>
        );
    }
}

export default OldMyriadNavBar;