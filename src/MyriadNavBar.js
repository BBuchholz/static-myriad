import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

class MyriadNavBar extends React.Component {
    
    render() {
        return(

            <div>
                <h2>
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
            </div>
        );
    }
}

export default MyriadNavBar;