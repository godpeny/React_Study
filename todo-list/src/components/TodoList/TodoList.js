import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {    

    shouldComponentUpdate(nextProps,nextState){
        return this.props.todos !== nextProps.todos
    }

    render() {

        const {todos, onToggle,onRemove} = this.props;
        const todoList = todos.map(
            node => (
                <TodoItem 
                key = {node.get('id')}
                done = {node.get('done')}
                onToggle = {()=>onToggle(node.get('id'))}
                onRemove = {()=>onRemove(node.get('id'))}
                >
                {node.get('text')}
                </TodoItem>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;