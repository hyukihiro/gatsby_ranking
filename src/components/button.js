import React from 'react';

const Button = props => {
    return (
        <button
            type="button"
            onClick={event => {
                event.preventDefault();
                props.onClick();
            }}
        >
            click
        </button>
    );
};

export default Button;
