import React, { Component } from 'react';

export default function asyncComponent(getComponent){
    return class AsyncComponent extends Component {

        static Component = null;
        state = {
            Component: AsyncComponent.Component
        };

        constructor(props){
            super(props);

            if(AsyncComponent.Component !== null){
                return;
            }

            getComponent().then(({default:Component}) => {
                AsyncComponent.Component = Component;
                this.setState({
                    Component: Component 
                });
            });
        }

        render(){
            const {Component} = this.state;

            if(Component !== null){
                console.log({...this.props});
                return <Component {...this.props} />
            }
            return null;
        }
    }
};

