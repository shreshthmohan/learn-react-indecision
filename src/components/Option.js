// import React from 'react';


const Option = (props) => {
    return (<div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={(event) => {
                props.removeOption(props.optionText);
            }}
        >
            Remove this
        </button>
    </div>);
};

export default Option;