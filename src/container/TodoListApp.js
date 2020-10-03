import React, { Component } from 'react'; 
import TodoForm from './../components/TodoForm'; 
import { TodoList } from './../components/TodoList'; 
import { ContainerApp } from './../components/ContainerApp'; 
import { WelcomeMessage } from './../components/Message'; 
import { getTodos } from './../API'; 

export default class TodoListApp extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            items: []
        } 
    }

    async componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({ items: data }); 
        //     });  

        const { data } = await getTodos();          
        this.setState({ items: data });             
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
                    <WelcomeMessage/>
                    <TodoForm pushToItems={this.pushToItems} />
                    <hr />
                    <TodoList items={items} removeFromItems={this.removeFromItems} /> 
                </div>
            </ContainerApp>
        ); 
    }


}