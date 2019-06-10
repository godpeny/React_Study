import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names: ['Google','Apple','Amazon'],
        name: ''
    };

    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    handlePushButton = () =>{
        this.setState({
            names: this.state.names.concat(this.state.name),
            name:''
        });
        this.input.focus();
    }

    handleRemove = (idx) =>{
        const temp = this.state.names;

        this.setState({
            names: [
                ...temp.slice(0,idx),
                ...temp.slice(idx+1,temp.length)
            ]
        })
    }

    handleEnter = (e) =>{
        if(e.key === 'Enter'){
            this.handlePushButton();
        }
    }

    render() {

        const nameList = this.state.names.map(
            (name,idx) => (<li key = {idx} onDoubleClick = {()=>this.handleRemove(idx)}>{name}</li>)
        );

        return (
            <div>
                <input
                type="text"
                value={this.state.name}
                onChange = {this.handleChange}
                onKeyPress = {this.handleEnter}
                ref = {(ref) => {this.input = ref}}
                />
                <button 
                onClick = {this.handlePushButton}>추가</button>
                {nameList}
            </div>
        );
    }
}

export default IterationSample;