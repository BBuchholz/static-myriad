import React from 'react';

// WORKING FROM: 
// https://www.w3schools.com/react/react_forms.asp
//
// CURRENT SECTION:
// "Select"
//

class EntryForm extends React.Component {
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
    render() {
        return(
            <form>
                <h1>Welcome To Myriad!</h1>
                <p>Entry Text: {this.state.entryText}</p>
                <p>Tags: {this.state.tagString}</p>
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
            </form>
        );
    }
}

export default EntryForm;