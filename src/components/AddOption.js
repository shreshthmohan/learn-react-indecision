//import React from 'react';

// using experimental class properties syntax
// constructor not needed. arrow functions can be used to define methods
export default class AddOption extends React.Component {
    state = {
        error: null
    };
    // constructor(props) {
    //     super(props);
    //     this.formSubmit = this.formSubmit.bind(this);
        
    // }
    formSubmit = (event) => {
        event.preventDefault();
        const addedOpt = event.target.elements.option.value.trim();
        
        const err = this.props.addOption(addedOpt);
        if(!err) {
            event.target.elements.option.value = '';
        }
        this.setState(() => {
            return {
                error: err // optional shorthand in ES6 if the property name and
                           // passed value is of the same name:
                           // error
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.formSubmit}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}



// using ES6 classes
/*
export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            error: null
        }
    }
    formSubmit(event) {
        event.preventDefault();
        const addedOpt = event.target.elements.option.value.trim();
        
        const err = this.props.addOption(addedOpt);
        if(!err) {
            event.target.elements.option.value = '';
        }
        this.setState(() => {
            return {
                error: err // optional shorthand in ES6 if the property name and
                           // passed value is of the same name:
                           // error
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
*/