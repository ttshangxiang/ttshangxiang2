import * as React from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import { Home } from './Home';
// import { Hello } from './Hello';
import { Xqj } from './Xqj';
import { List } from './List';
// import { MyRoute}  from './MyRoute';
// import { Article } from './Article';
// import { My } from './My';
// import { Editor } from './Editor';
import { Material } from './Material'

export interface AppProps {}

export default class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Material} />
                    <Route path='/xqj' component={Xqj} />
                    {/* <MyRoute path='/i' component={I} />
                    <MyRoute path='/my' component={My} />
                    <MyRoute path='/like' component={Like} />
                    <MyRoute path='/hate' component={Hate} />
                    <MyRoute path='/think' component={Think} />
                    <MyRoute path='/daily' component={Daily} />
                    <MyRoute path='/about' component={About} />
                    <MyRoute path='/hello' component={Hello} />
                    <Route path='/article' component={Article}/>
                    <Route path='/editor' component={Editor} /> */}
                </div>
            </Router>
        );
    }
}

class I extends React.Component<{}, {}> {
    render () {
        let age = new Date().getFullYear() - 1991;
        let list = [
            {title: '普通人'},
            {title: '男'},
            {title: age},
            {title: '长沙 - 深圳'},
            // {title: '我的照片', path: '/my/photos'},
            {title: '更多', path: '/about'}
        ];
        return <List module="我" list={list} url=""/>;
    }
}

class Like extends React.Component<{}, {}> {
    render () {
        return <List module="我喜欢" url="/api/article?type=1"/>;
    }
}

class Hate extends React.Component<{}, {}> {
    render () {
        return <List module="我不喜欢" url="/api/article?type=2"/>;
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
