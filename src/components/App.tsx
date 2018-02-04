import * as React from 'react';
import { Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './Home';
import { Hello } from './Hello';
import { Xqj } from './Xqj';
import { List } from './List';
import { MyRoute}  from './MyRoute'
import 'whatwg-fetch';

export interface AppProps {}

export default class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <Router>
                <div>
                    <MyRoute exact path='/' component={Home}></MyRoute>
                    <MyRoute path='/i' component={I}></MyRoute>
                    <MyRoute path='/like' component={Like}></MyRoute>
                    <MyRoute path='/!like' component={DontLike}></MyRoute>
                    <MyRoute path='/why' component={Why}></MyRoute>
                    <MyRoute path='/!why' component={WhyNot}></MyRoute>
                    <MyRoute path='/think' component={Think}></MyRoute>
                    <MyRoute path='/daily' component={Daily}></MyRoute>
                    <MyRoute path='/about' component={About}></MyRoute>
                    <MyRoute path='/hello' component={Hello}></MyRoute>
                    <MyRoute path='/xqj' component={Xqj}></MyRoute>
                </div>
            </Router>
        );
    }
}

class I extends React.Component<{}, {}> {
    render () {
        return <List module="我" url="/api/article?type=0"/>;
    }
}

class Like extends React.Component<{}, {}> {
    render () {
        return <List module="我喜欢" url="/api/article?type=1"/>;
    }
}

class DontLike extends React.Component<{}, {}> {
    render () {
        return <List module="我不喜欢" url="/api/article?type=2"/>;
    }
}

class Why extends React.Component<{}, {}> {
    render () {
        return <List module="我为什么喜欢" url="/api/article?type=3"/>;
    }
}

class WhyNot extends React.Component<{}, {}> {
    render () {
        return <List module="我为什么不喜欢" url="/api/article?type=4"/>;
    }
}

class Think extends React.Component<{}, {}> {
    render () {
        return <List module="我认为" url="/api/article?type=5"/>;
    }
}

class Daily extends React.Component<{}, {}> {
    render () {
        return <List module="我今天" url="/api/article?type=6"/>;
    }
}

class About extends React.Component<{}, {}> {
    render () {
        return <List module="关于" url="/api/article?type=7"/>;
    }
}
