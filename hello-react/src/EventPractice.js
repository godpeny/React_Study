import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username : '',
        message : ''
    }

    handleChange = (e) => {
        console.log(e.target.value);

        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handdleClick = () => {
        alert(`username = ` + this.state.username + `message : ` + this.state.message);
        this.setState({
            username : '',
            message : ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handdleClick();
        }
    }

    render() {
        return (
            <div>
                <input 
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder = "write anything"
                />

                <input 
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder = "write anything2"
                />

                <button
                onClick={this.handdleClick}>reset</button>


            </div>
        );
    }
}

export default EventPractice;