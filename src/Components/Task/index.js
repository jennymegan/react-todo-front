import React, { Component } from 'react';

export class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name, taskType: props.taskType}

    }


    render() {
        return (
            <div>
                {this.state.taskType} {this.state.name}
            </div>
        )
    }
}

export default Task