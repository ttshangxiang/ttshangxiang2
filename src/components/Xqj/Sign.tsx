import * as React from "react";
import './index.less';

interface SignState { click: number };
export class Sign extends React.Component<{}, SignState> {
    constructor (props:any) {
        super(props);

        this.state = {
            click: 0
        };

        setInterval(() => {
            let click = this.state.click;
            click && this.setState({click: this.state.click - 1});
        }, 1000);
    }

    clickXqj () {
        this.setState({click: this.state.click + 1});
    }

    render() {
        let url = 'javascript:;';
        if (this.state.click > 2) {
            url = '/xqj';
        }
        return <a href={url} className="xqj-sign" onClick={() => this.clickXqj()}></a>;
    }
}