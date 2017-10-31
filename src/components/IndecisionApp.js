// import React from 'react';

import AddOption from './AddOption.js';
// import Option from './components/Option.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';
// using experimental class properties syntax
// methods can now be defined as class properties
// and no need for a constructor function
export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: null
    };
    // don't need to bind to fix this binding because now we're using arrow
    // functions. in arrow functions this points to the parent class instance.
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         options: []
    //     };
    //     this.removeAll = this.removeAll.bind(this);
    //     this.pickTask = this.pickTask.bind(this);
    //     this.addOption = this.addOption.bind(this);
    //     this.removeOption = this.removeOption.bind(this);
    // }
    removeAll = () => {
        this.setState(() => ({options: []})); // implcitly returning and object
                                              // without writing 'return'
    }
    removeOption = (optToBeRemoved) => {
        this.setState((prevState) => {
            return {
                options : prevState.options.filter((item) => {
                    return item !== optToBeRemoved;
                })
            };
        });
    }
    pickTask = () => {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const selOpt = this.state.options[randomIndex];
        this.setState(() => {
            return {
                selectedOption: selOpt
            };
        });
    }
    clearModal = () => {
        this.setState(() => {
            return {
                selectedOption: null
            };
        });
    }
    addOption = (addedOpt) => {
        if(!addedOpt) {
            return 'You entered some white space';
        } else if (this.state.options.indexOf(addedOpt) > -1) {
            return 'Such an option already exists';
        } else {
            this.setState((prevState) => {
                return {
                    options : prevState.options.concat(addedOpt)
                };
            });
        }
    }
    componentDidMount() {
        try {
            const jsonLocal = localStorage.getItem('options');
            const opts = JSON.parse(jsonLocal);
            if (opts) {
                this.setState(() => {
                    return {
                        options: opts
                    }
                });
            }    
        } catch (error) {
            // do nothing. don't want to update state when error
        }
        
        
    }
    componentDidUpdate(prevProps, prevState) {
        // will store value only if latest state is different from previous
        // state. DidUpdate is called everytime, even if the state was unchanged
        if (prevState.options.length !== this.state.options.length) {
            const jsonLocal = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonLocal);
        }
    }
    render() {
        const title = "Indecision";
        const subtitle = "Subtitle here";
      
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        pickTask={this.pickTask}
                    />
                    <div className="widget">
                        <Options
                            removeOption={this.removeOption}
                            options={this.state.options}
                            removeAll={this.removeAll}
                        />
                        <AddOption addOption={this.addOption}/> 
                    </div>
                </div>
                <OptionModal
                    clearModal={this.clearModal} 
                    selectedOption={this.state.selectedOption}/>
            </div>
        );
    }
}
// Since we don't pass any props to Indecision app
// IndecisionApp.defaultProps = {
//     options : []
// };


// using ES6
/*
export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.removeAll = this.removeAll.bind(this);
        this.pickTask = this.pickTask.bind(this);
        this.addOption = this.addOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
    }
    componentDidMount() {
        try {
            const jsonLocal = localStorage.getItem('options');
            const opts = JSON.parse(jsonLocal);
            if (opts) {
                this.setState(() => {
                    return {
                        options: opts
                    }
                });
            }    
        } catch (error) {
            // do nothing. don't want to update state when error
        }
        
        
    }
    componentDidUpdate(prevProps, prevState) {
        // will store value only if latest state is different from previous
        // state. DidUpdate is called everytime, even if the state was unchanged
        if (prevState.options.length !== this.state.options.length) {
            const jsonLocal = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonLocal);
        }
    }
    removeAll() {
        this.setState(() => ({options: []})); // implcitly returning and object
                                              // without writing 'return'
    }
    removeOption(optToBeRemoved) {
        this.setState((prevState) => {
            return {
                options : prevState.options.filter((item) => {
                    return item !== optToBeRemoved;
                })
            };
        });
    }
    pickTask() {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomIndex]);
    }

    addOption(addedOpt) {
        if(!addedOpt) {
            return 'You entered some white space';
        } else if (this.state.options.indexOf(addedOpt) > -1) {
            return 'Such an option already exists';
        } else {
            this.setState((prevState) => {
                return {
                    options : prevState.options.concat(addedOpt)
                };
            });
        }
    }

    render() {
        const title = "Indecision";
        const subtitle = "Subtitle here";
      
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    pickTask={this.pickTask}
                />
                <Options
                    removeOption={this.removeOption}
                    options={this.state.options}
                    removeAll={this.removeAll}
                />
                <AddOption addOption={this.addOption}/> 
            </div>
        );
    }
}
// Since we don't pass any props to Indecision app
// IndecisionApp.defaultProps = {
//     options : []
// };
*/