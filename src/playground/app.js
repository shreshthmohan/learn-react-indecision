class IndecisionApp extends React.Component {
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

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        );
};


const Action = (props) => {
    return (
        <button disabled={!props.hasOptions} onClick={props.pickTask}>
            What should I do?
        </button>
    );
};

const Options = (props) => {
    return (
        <div>
            <button
                disabled={props.options.length === 0}
                onClick={props.removeAll}
            >
                Remove All
            </button>
            {props.options.length === 0 && <p>'No tasks to show'</p>}
            {props.options.map((opt) => {
                return (<Option
                    key={opt}
                    optionText={opt}
                    removeOption={props.removeOption}
                />)
            })}
        </div>
    )
};

const Option = (props) => {
    return (<div>
        {props.optionText}
        <button
            onClick={(event) => {
                props.removeOption(props.optionText);
            }}
        >
            Remove this
        </button>
    </div>);
};

class AddOption extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));