import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const EditTodo = (props) => {
    const { taskToEdit, saveTask } = useContext(TodoContext)
    const [newEditItem, setNewEditItem] = useState(taskToEdit);

    useEffect(() => {
        setNewEditItem(taskToEdit)
    }, [taskToEdit])

    function handleEditInput(e) {
        let newTask = {
            ...newEditItem,
            [e.target.name]: e.target.value
        }
        setNewEditItem(newTask)
    }


    return (
        <div>
            {newEditItem ?
                <>
                    <input
                        onChange={handleEditInput}
                        value={newEditItem.name}
                        name="name"
                        type="text"
                    />
                    <input
                        onChange={handleEditInput}
                        name="surname"
                        value={newEditItem.surname}
                        type="text"
                    />
                    <input
                        onChange={handleEditInput}
                        name="phone"
                        value={newEditItem.phone}
                        type="text"
                    />
                    <button onClick={() => saveTask(newEditItem, props.history)}>Save</button>
                </>
                
                : <h1>Loading</h1>}
        </div>
    );
};

export default EditTodo;