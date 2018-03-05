import * as React from "react";
import './index.less';
import { Sign } from '../Xqj/Sign';
import { Link } from 'react-router-dom';
import { List } from '../List';

interface HomeProps {};
interface HomeState {};

export class Home extends React.Component<HomeProps, HomeState> {
    constructor (props:any) {
        super(props);
    }

    render() {
        let list = [
            {title: '我', path: '/i'},
            {title: '我的', path: '/my'},
            {title: '我喜欢', path: '/like'},
            {title: '我不喜欢', path: '/!like'},
            {title: '我认为', path: '/think'},
            {title: '我今天', path: '/daily'},
            {title: '关于', path: '/about'},
            {title: '----------', path: '/hello'}
        ];

        return (
            <List module="TTshangxiang" list={list} url="">
                <Sign/>
            </List>
        );
    }
};