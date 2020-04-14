import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import { isAuthenticated } from './auth';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';

console.log(isAuthenticated())

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        } 
    />
)

export default class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <Login />} />
                    <Route exact path="/register" component={() => <Register />} />
                    <PrivateRoute exact path="/home" component={() => <Home />} />
                    <PrivateRoute exact path="*" component={() =>  <h1>PAGINA NÃO EXISTE</h1>} />
                </Switch>
            </BrowserRouter>
        )
    }
}
