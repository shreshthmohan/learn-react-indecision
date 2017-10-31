class VisToggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility : false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>Details ...</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisToggler />, document.getElementById('app'));


let buttonAction = true;

const toggle = () => {
    buttonAction = !buttonAction;
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{buttonAction ? 'Show Details' : 'Hide details'}</button>
            {!buttonAction && <p>Here are the details</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

//render();