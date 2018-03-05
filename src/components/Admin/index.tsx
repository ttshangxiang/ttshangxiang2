import * as React from "react";
import { Route } from 'react-router-dom';
import './index.less';
import { List } from '../List';

interface AdminProps {};
interface AdminState {};

export class Admin extends React.Component<AdminProps, AdminState> {
    constructor (props:any) {
        super(props);
    }

    render() {
        let list = [
            {title: '记录', path: '/admin/visited'},
            {title: '文章', path: '/admin/article'},
            {title: '影视', path: '/admin/video'},
            {title: '音乐', path: '/admin/music'}
        ];
        return (
            <div>
                <List module="admin" list={list} url=""></List>
            </div>
        );
    }
};