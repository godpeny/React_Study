import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter.js';

import './CounterList.css';

const CounterList = ({counters,onIncrement,onDecrement,onSetColor}) => {

    const counterList = counters.map(
        (counter,i) => (
            <Counter
            key = {i}
            index = {i}
            {...counter}
            onIncrement = {onIncrement}
            onDecrement = {onDecrement}
            onSetColor = {onSetColor}
            />
        )
    );

    
    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propType = {
    counter: PropTypes.arrayOf(PropTypes.shape({number:PropTypes.number,color:PropTypes.string})),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
}

CounterList.defaultProps = {
    counter: []
}

export default CounterList;