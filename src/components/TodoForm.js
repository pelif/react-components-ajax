import React , { Component } from 'react'; 

export default class TodoForm extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            todo: ''
        }; 
    }

    onAdd = (event) => {
        event.preventDefault();
        const {todo} = this.state;
        if(todo) {
            this.props.pushToItems(this.state.todo);
            this.setState({ todo: ''});
        }    
    }

    onChange = (event) => {
        this.setState({
          todo: event.target.value
        }); 
    }

    render() {
        const { todo } = this.state; 
        return (
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={this.onChange} value={todo} name="todo" placeholder="Enter todo here" />
                </div>

                <div className="form-group">
                    <button type="button" className="form-control btn btn-success font-weight-bold" onClick={this.onAdd}>Create</button>
                </div>
            </div>
        ); 
    }
    
}