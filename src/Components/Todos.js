import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaTrash } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
    return (

        <ListGroup className='mt-5 mb-2 items'>
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    <div className="todoContainer">
                        {todo.todoString}
                        <span onClick={() => markComplete(todo.id)}>
                            <FaTrash />
                        </span>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
};

export default Todos;
