import React, { Component } from 'react';
import {Header} from "../Header";
import ListCompletedTasks from "../ListCompletedTasks";
import ListUncompletedTasks from "../ListUncompletedTasks";
import Input from "../Input";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []}
    }

    listUncompletedTasks = () => {
        fetch('http://localhost:3001/task').then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({tasks: data.data.results})
        })
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <ListUncompletedTasks tasks={this.state.tasks} listUncompletedTasks={this.listUncompletedTasks}/>
                <ListCompletedTasks />
                <Input value="Item to Add"/>
            </div>
        );
    }
}

export default Home;