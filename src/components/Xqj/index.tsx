import * as React from "react";
import './index.less';

export interface XqjProps {};

export class Xqj extends React.Component<XqjProps, {}> {
    render() {
        const jhq = require('./jhq.png');
        const xyt = require('./xyt.jpg');
        let item = {
            name: '小青椒',
            time: '2018-19-20 20:21:22',
            content: '呵呵',
            avatar: xyt
        }
        return (
            <div className="xqj-main">
                <div className="xqj-title xqj-content">留言板</div>
                <div className="xqj-content">
                    <div className="xqj-list">
                        <XqjItem item={item}>
                            <XqjItem item={item}/>
                        </XqjItem>
                    </div>
                </div>
            </div>
        );
    }
}

interface XqjItemProps { item: any };
class XqjItem extends React.Component<XqjItemProps, {}> {
    render () {
        const {name, time, content, avatar} = this.props.item;
        return (
            <div className="xqj-item">
                <div className="xqj-item-top">
                    <div className="xqj-item-time">{time}</div>
                    <div className="xqj-item-name">{name}</div>
                </div>
                <div className="xqj-item-content">
                    <span>{content}</span>
                    {this.props.children}
                </div>
                <div className="xqj-item-avatar"><img src={avatar} alt={name}/></div>
            </div>
        )
    }
}
