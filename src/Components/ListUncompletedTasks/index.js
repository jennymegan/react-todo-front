import React, { Component } from 'react';
import {Task} from "../Task";
import {Button} from "../Button";
import {Header} from "../Header";

export class ListUncompletedTasks extends Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name}
        // this will need to give the tasks their internal values
    }

    componentDidMount() {
       this.props.listUncompletedTasks()

    }
    //this runs immediately after first render - after component is first "mounted"



    handleClick = (e) => {
        //add a task to the completed list
        let id = e.target.dataset.id
        fetch(`http://localhost:3001/task/${id}`, {method: 'PUT'} ).then((response) => {
            return response.json()
        }).then((data) => {
            console.log('updated')
            this.props.listUncompletedTasks()
        })
    }

    render() {
        return (
            <>
            <Header title="To-Do" />

                {this.props.tasks.map((task, index) => (

                    <div className="left-align" key={index}>
                    <Task taskType="To Do: " name={task.name}  />
                    <Button click={this.handleClick} id={task._id} name="Mark Complete" />
                    </div>
                ))}

            </>
        )
    }
}

export default ListUncompletedTasks