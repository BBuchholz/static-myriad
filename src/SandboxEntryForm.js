import React from 'react';

// WORKING FROM: 
// https://www.w3schools.com/react/react_forms.asp
//
// CURRENT SECTION:
// "Select"
//

class SandboxEntryForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            entryText: '',
            tagString: '', 
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + JSON.stringify(this.state));
    }
    render() {
        return(
            <form onSubmit={this.mySubmitHandler}>
                <h1>Welcome To Myriad!</h1>
                <p>Tags: </p>
                <input 
                    type="text"
                    name="tagString"
                    onChange={this.myChangeHandler}
                />
                <p>Entry Text: </p>
                <textarea 
                    name="entryText"
                    onChange={this.myChangeHandler}
                />
                <input
                    type='submit'
                />
                <p>XML OUTPUT: </p>
                <textarea 
                    name="xmlOutput"
                />
            </form>
        );
    }
}

export default SandboxEntryForm;