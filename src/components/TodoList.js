import React from 'react'; 
import TodoListItem from './TodoListItem'; 

//1 forma
// export default class TodoList extends Component {

//     constructor(props) {
//         super(props); 
//     }

//     render() {
//         return (
//             <ul>
//                 <li></li>
//             </ul>
//         ); 
//     }
// }

//2 forma - component stateless
export const TodoList = (props) => {
    const { items, removeFromItems } = props; 
    return (
        <ul className="list-group">
            {
              items.map((item, index) => (
                <TodoListItem key={index} item={item}  removeFromItems={removeFromItems} />
              ))
            }                  
        </ul>
    ); 
}; 