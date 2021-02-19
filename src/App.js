import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {Header} from "./Components/Header";
import ListCompletedTasks from "./Components/ListCompletedTasks";
import ListUncompletedTasks from "./Components/ListUncompletedTasks";
import Input from "./Components/Input";
import Home from "./Components/Home"

class App extends Component {
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
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/todo' render={(props) => ( <ListUncompletedTasks tasks={this.state.tasks} listUncompletedTasks={this.listUncompletedTasks}/>)} />
                <Route path='/done' render={(props) => ( <ListCompletedTasks />)} />
                <Route path='/add' render={(props) => (<Input value="Item to Add"/>)} />
            </Switch>
        </div>
    );
  }
}

export default App;
