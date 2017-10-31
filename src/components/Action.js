const Action = (props) => {
    return (
        <button className="big-button" disabled={!props.hasOptions} onClick={props.pickTask}>
            What should I do?
        </button>
    );
};

export default Action;