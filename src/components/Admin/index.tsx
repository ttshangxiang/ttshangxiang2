import * as React from "react";
import './index.less';

interface AdminProps {};
interface AdminState {};

export class Admin extends React.Component<AdminProps, AdminState> {
    constructor (props:any) {
        super(props);
    }

    render() {
        return (
            <div>后台管理</div>
        );
    }
};