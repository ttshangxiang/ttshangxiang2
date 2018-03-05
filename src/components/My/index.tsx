import * as React from "react";
import './index.less';
import { List } from '../List';

interface MyProps {};
interface MyState {};

export class My extends React.Component<MyProps, MyState> {
    constructor (props:any) {
        super(props);
    }

    render() {
        let list = [
            {title: '我玩什么游戏', path: '/my/games'},
            {title: '我看什么电视', path: '/my/videos'},
            {title: '我听什么音乐', path: '/my/musics'},
            {title: '我看什么书', path: '/my/books'}
        ];

        return (
            <List module="我的" list={list} url="" />
        );
    }
};