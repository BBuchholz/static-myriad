import React from "react";
import DemoContext from "./context/DemoContext";
import {
    Form,
} from 'react-bootstrap';

const selectedBookTitle = {
    bookTitle: "Demo Book 1"
}

const MyriadNavBarBookSelector = () => {
        return(
            <Form inline>
                <Form.Control as="select">
                    <option>Demo Book 1</option>
                    <option>Demo Book 2</option>
                    <option>Demo Book 3</option>
                </Form.Control>
            </Form>
    );
}

export default MyriadNavBarBookSelector;