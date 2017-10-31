// import React from 'react';
import Option from './Option.js';


const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">Your tasks</h3>
            <button
                className="button button--link"
                disabled={props.options.length === 0}
                onClick={props.removeAll}
            >
                Remove All
            </button>
            </div>
            {props.options.length === 0 && <p className="widget__message">No tasks to show</p>}
            {props.options.map((opt, index) => {
                return (<Option
                    key={opt}
                    optionText={opt}
                    count={index + 1}
                    removeOption={props.removeOption}
                />)
            })}
        </div>
    )
};

export default Options;