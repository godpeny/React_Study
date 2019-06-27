import React, { Component } from 'react';
import TodoList from '../components/TodoList';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todosActions from '../modules/todos.js';

class TodoListContainer extends Component {

    handleToggle = (id) => {
        const {TodosActions} = this.props;
        TodosActions.toggle(id);
    }

    handleRemove = (id) => {
        const {TodosActions} = this.props;
        TodosActions.remove(id);
    }

    render() {
        return (
            <div>
                <TodoList 
                todos={this.props.todos}
                onToggle = {this.handleToggle}
                onRemove = {this.handleRemove}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        TodosActions: bindActionCreators(todosActions,dispatch)
    })
)(TodoListContainer);
