class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try {
            const cntStr = localStorage.getItem('count');
            const cnt = parseInt(cntStr, 10);
            if(!isNan(cnt)) {
                this.setState(() => {
                    return {
                        count: cnt
                    }
                });
            }    
        } catch (error) {
            
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        // store value in localstorage if different
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    plusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count : 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const plusOne = () => {
//     count = count + 1;
//     rendercountapp();
// };
// const minusOne = (c) => {
//     count = count - 1;
//     rendercountapp();
// };
// const reset = (c) => {
//     count = 0;
//     rendercountapp();
// };



// const rendercountapp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={plusOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template2, appRoot);

// };

// rendercountapp();

