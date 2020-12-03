import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
    const [contact, setContact] = useState({});
    const { addNewContact } = useContext(TodoContext)

    function handleInputsValue(e) {
        let obj = {
            ...contact,
            [e.target.name]: e.target.value
        }
        setContact(obj)
    }

    return (
        <div>
            <input
                name="name"
                onChange={handleInputsValue}
                type="text"
                placeholder="name"
            />
            <input
                name="surname"
                onChange={handleInputsValue}
                type="text"
                placeholder="surname"
            />
            <input
                name="phone"
                onChange={handleInputsValue}
                type="text"
                placeholder="phone"
            />
            <button onClick={() => addNewContact(contact)}>Add</button>
        </div>
    );
};

export default AddTodo;