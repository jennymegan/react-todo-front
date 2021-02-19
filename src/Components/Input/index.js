import React, { Component } from 'react';
import Button from "../Button";
import {Header} from "../Header";

export class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {value: props.value}
        // props name could just be "new task here?"
    }

    handleClick = (e) => {

        let data = e.target.previousSibling.value
        console.log(data)
        fetch(`http://localhost:3001/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: data})
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log('updated')
        })
        //reset the value inside the box?
        this.setState({value: this.props.value})
    }

    render() {
        return (
            <div>
                <Header title="Add New Task" />
                <form>
                    <input type="text" defaultValue={this.state.value}></input>
                    <Button name="Add Task" click={this.handleClick} />
                </form>

            </div>
        )
    }
}

export default Task