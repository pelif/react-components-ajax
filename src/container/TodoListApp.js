import React, { Component } from 'react'; 
import TodoForm from './../components/TodoForm'; 
import { TodoList } from './../components/TodoList'; 
import { ContainerApp } from './../components/ContainerApp'; 

export default class TodoListApp extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            items: []
        } 
    }

    pushToItems = (todo) => {
        const { items } = this.state;
        this.setState({
            items: [...items, todo] 
        })
    }

    removeFromItems = (index) => {
        const { items } = this.state;
        items.splice(index, 1); 
        this.setState({ items }); 
    }

    render() {
        const { items } = this.state; 
        return (
            <ContainerApp>
                <div className="col-xs-12 col-md-12">
                    <h2>Todo list</h2>
                    <TodoForm pushToItems={this.pushToItems} />
                    <hr />
                    <TodoList items={items} removeFromItems={this.removeFromItems} /> 
                </div>
            </ContainerApp>
        ); 
    }


}