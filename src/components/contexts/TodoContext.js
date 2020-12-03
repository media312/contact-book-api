import axios from 'axios';
import React, { useReducer } from 'react';

export const TodoContext = React.createContext();

const INIT_STATE ={
    contacts: [],
    taskToEdit: null

}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_CONTACTS_DATA":
            return{...state, contacts: action.payload}
            case"EDIT_TODO":
                return {...state, taskToEdit: action.payload}
            default: return state

    }
}

const TodoContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer,INIT_STATE)

    async function addNewContact(newContact){
        await axios.post(`http://localhost:8002/todos`, newContact)
        getContactsdata()
    }

     async function getContactsdata(){
         const {data} = await axios('http://localhost:8002/todos')
        dispatch({
            type:"GET_CONTACTS_DATA",
            payload: data   
        })
        }
         async function deleteTask (id){
            await axios.delete(`http://localhost:8002/todos/${id}`)
            getContactsdata()
        }

        const editTodo =  async (id) => {
            let {data} = await axios(`http://localhost:8002/todos/${id}`)
            dispatch({
                type:"EDIT_TODO",
                payload: data
            })
        }

        const saveTask = async(newTask,history) =>{
            axios.patch(`http://localhost:8002/todos/${newTask.id}`, newTask)
            history.push('/')
        }

    
    return (
        <TodoContext.Provider value={{
            contacts: state.contacts,
            taskToEdit:state.taskToEdit,
            addNewContact,
            getContactsdata,
            deleteTask,
            editTodo,
            saveTask


        }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;