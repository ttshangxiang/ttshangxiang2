import * as React from 'react';
import { Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './Home';
import { Hello } from './Hello';
import { Xqj } from './Xqj';
import { MyRoute}  from './MyRoute'
import 'whatwg-fetch';

export interface AppProps {}

export default class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <Router>
                <div>
                    <MyRoute exact path='/' component={Home}></MyRoute>
                    <MyRoute path='/hello' component={Hello}></MyRoute>
                    <MyRoute path='/xqj' component={Xqj}></MyRoute >
                </div>
            </Router>
        );
    }
}