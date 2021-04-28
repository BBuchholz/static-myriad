import React from 'react';
import Form from 'react-bootstrap/Form';

class LogEntriesNew extends React.Component {
    render() {
        return(
            <div>
                <Form>
                    <Form.Group controlId="formGroupTagString">
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Tag String" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEntryTextArea">
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
<p>sign in to sign post (label and form group goes here for session variable with user info)</p>
                </Form>
            </div>
        );
    }
}

export default LogEntriesNew;