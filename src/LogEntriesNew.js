import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

class LogEntriesNew extends React.Component {
    render() {
        return(
            <div>
                <Form onSubmit={(event) => alert(event.target.value)}>
                    <Form.Group controlId="formGroupTagString">
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Tag String" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEntryTextArea">
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Name
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                        </Col>
                        <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Username
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" placeholder="Username" />
                        </InputGroup>
                        </Col>
                        <Col xs="auto">
                        <Form.Check
                            type="checkbox"
                            id="autoSizingCheck"
                            className="mb-2"
                            label="Remember me"
                        />
                        </Col>
                        <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default LogEntriesNew;