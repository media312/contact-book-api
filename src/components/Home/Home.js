import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Tododlist from '../Todolist/Tododlist';

const Home = () => {
    return (
        <div>
            <AddTodo />
            <Tododlist/>
        </div>
    );
};

export default Home;