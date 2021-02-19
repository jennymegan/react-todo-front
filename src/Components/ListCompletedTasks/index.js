import React, { Component } from 'react';
import {Task} from "../Task";
import {Button} from "../Button";
import {Header} from "../Header";

export class ListCompletedTasks extends Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name, tasks: []}
    }

    componentDidMount() {
        this.listCompletedTasks()
    }

    listCompletedTasks = () => {
        fetch('http://localhost:3001/task?completed=1').then((response) => {
            return response.json()
        }).then((data) => {
            let results = data.data.results
            results.forEach((result) => {
                this.setState({tasks: data.data.results})
            })
        })
    }
//this API call needs fixing to include & deleted = 0 !!

    handleClick = (e) => {
        //add a task to the deleted list
        let id = e.target.dataset.id
        console.log(id)
        fetch(`http://localhost:3001/task/${id}`, {method: 'DELETE'} ).then((response) => {
            return response.json()
        }).then((data) => {
            console.log('updated')
            this.listCompletedTasks()
        })

    }


    render() {
        return (
            <>
            <Header title="Done" />

                {this.state.tasks.map((task, index) => (
                    <div key={index}>
                        <Task taskType="Done: " name={task.name} />
                        <Button click={this.handleClick} id={task._id} name="Delete Task"/>
                    </div>
                ))}


            </>
    )
    }
}

export default ListCompletedTasks