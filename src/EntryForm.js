import React from 'react';

// WORKING FROM: 
// https://www.w3schools.com/react/react_forms.asp
//
// CURRENT SECTION:
// "Multiple Input Fields"
//

class EntryForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { enteredText: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.enteredText);
    }
    myChangeHandler = (event) => {
        this.setState({enteredText: event.target.value});
    }
    render() {
        // let displayText = '';
        // if(this.state.enteredText){
        //     displayText = <p>Entered text: {this.state.enteredText}</p>;
        // } else {
        //     displayText = '';
        // }
        return(
            <form onSubmit={this.mySubmitHandler}>
                <h1>Welcome To Myriad!</h1>
                {/* {displayText} */}
                <p>Entered text: {this.state.enteredText}</p>
                <input 
                    type="text"
                    onChange={this.myChangeHandler}
                />
                <input
                    type='submit'
                />
            </form>
        );
    }
}

export default EntryForm;