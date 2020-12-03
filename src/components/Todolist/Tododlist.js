import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';

const Tododlist = () => {
    const {
        getContactsdata,
        contacts,
        deleteTask,
        editTodo
     } = useContext(TodoContext);

    useEffect(() => {
         getContactsdata()
    }, [])
    return (
        <div>
            {contacts.map(item =>(
                <ul key={item.id} >
                    <li>{item.name}</li>
                    <li>{item.surname}</li>
                    <li>{item.phone}</li>
                    <button onClick={ () => deleteTask(item.id)}>Delete</button>
                    <Link to="/edit">
                        <button onClick={() => editTodo(item.id)}>Edit</button>
                    </Link>
                </ul>
            ))}
        </div>
    );
};

export default Tododlist;