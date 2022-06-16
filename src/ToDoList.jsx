import React from 'react';

const ToDoList = (props) => {
    return (
        <>
            <div className='todo_style'>
                <span onClick={() => { props.onSelect(props.id)}}>
                <i className = "fa fa-times" aria-hidden="true" />
                </span>
            <li> {props.text} </li>
            </div>
        </>
    )
}

export default ToDoList;