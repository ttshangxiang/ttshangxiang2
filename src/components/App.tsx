import * as React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './Home';
import { Hello } from './Hello'

export interface AppProps {}

export default class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/hello' component={Hello}></Route>
                </div>
            </Router>
        );
    }
}