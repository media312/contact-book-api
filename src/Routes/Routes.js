import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddTodo from '../components/AddTodo/AddTodo';
import EditTodo from '../components/EditTodo/EditTodo';
import Home from '../components/Home/Home';
import {history} from '../helpers/history'

const Routes = () => {
    return (
        <BrowserRouter history={history} >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddTodo} />
                <Route exact path="/edit" component={EditTodo} />
            </Switch>
        </BrowserRouter >
    );
};

export default Routes;