import React from 'react'; 

export const Message = (props) => {
    return (
        <h1>{props.title}</h1>
    ); 
}

export const WelcomeMessage = (props) => {
    return (
        <Message title="Welcome to Todolist" />
    ); 
}