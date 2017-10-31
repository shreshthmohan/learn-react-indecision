const obj = {
    title: "this is page title",
    subtitle: "this is a subtitle",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const formOption = e.target.elements.option.value;

    if(formOption) {
        obj.options.push(formOption);
        renderApp();
    }
};

const clearArray = () => {
    obj.options = [];
    renderApp();
};

const whattodo = () => {
    const randomNumber = Math.floor(Math.random() * obj.options.length);
    alert(obj.options[randomNumber]);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{obj.title}</h1>
            {obj.subtitle && <p>{obj.subtitle}</p>}
            {obj.options && obj.options.length > 0 ? 'Here are your options' : 'No options'}
            <button disabled={obj.options.length === 0} onClick={whattodo}>What should I do?</button>
            <button onClick={clearArray}>Remove All</button>
            <p>{obj.options.length}</p>
            <ol>
                {
                    obj.options.map((opt) => {
                        return <li key={opt}>Option: {opt}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();