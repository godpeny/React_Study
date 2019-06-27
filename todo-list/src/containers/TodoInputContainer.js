import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as inputActions from '../modules/input.js';
import * as todosActions from '../modules/todos.js';

class TodoInputContainer extends Component {
    id = 1;
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const {value} = e.target;
        const {InputActions} = this.props;
        InputActions.setInput(value);
    }

    handleInsert = () => {
        const {InputActions, TodosActions, value} = this.props;
        const todos = {
            id : this.getId(),
            text: value,
            done: false
        };
        TodosActions.insert(todos);
        InputActions.setInput('');
    }
    render() {
        return (
            <div>
                <TodoInput 
                onChange = {this.handleChange}
                onInsert = {this.handleInsert}
                value = {this.props.value}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions,dispatch),
        TodosActions: bindActionCreators(todosActions,dispatch)
    })
)(TodoInputContainer);