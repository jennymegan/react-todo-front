import React, { Component } from 'react';

export class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name}
    }
    //you have to pass props in and you have to have super here.
    //

    render() {
        return (
            <button data-id={this.props.id} onClick={this.props.click}>{this.state.name}</button>
        )
    }
}

export default Button