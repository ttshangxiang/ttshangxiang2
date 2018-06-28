import * as React from 'react';
import './index.less';
import { Pager } from '../Pager';

interface XqjItem {
    _id: string,
    id: number,
    user_id: number,
    info: string,
    parent_id: number,
    time: string,
    user_name: string
}

interface XqjState {
    show: number,
    showErr: string,
    words: Array<XqjItem>,
    comments: Array<XqjItem>
    page: number,
    count: number,
    total: number
};

const jhq = require('./jhq.png');
const xyt = require('./xyt.jpg');

export class Xqj extends React.Component<{}, XqjState> {
    constructor (props:any) {
        super(props);
        this.state = {
            show: 0,
            showErr: '',
            words: [],
            comments: [],
            page: 0,
            count: 7,
            total: 0
        }
        this.load = this.load.bind(this)
    }

    componentDidMount () {
        this.load(0);
    }

    load (page:number) {
        const {count} = this.state;
        const offset = page * count;
        fetch(`/api/xiaoqingjiao?offset=${offset}&count=${count}`)
        .then(response => response.json())
        .then(json => {
            this.setState({...json, page});
        })
    }

    unlock () {
        let value = (this.refs.input as HTMLInputElement).value;
        if (value == '8'+'0731'+ '06' + '91' || value == 'xiao'+ 'qing' + 'jiao') {
            this.setState({ show: 1 });
        } else {
            const r = Math.random();
            if (r > 0.5) {
                this.setState({ showErr: '不是你'});
            } else if (r > 0.1 && r <= 0.5) {
                this.setState({ showErr: '你不是'});
            } else {
                this.setState({ showErr: '你走！'});
            }
        }
    }

    renderList() {
        const {words, comments, page, total, count} = this.state;
        let obj :any = {};
        comments.forEach(item => {
            if (item.parent_id != 0) {
                if (obj[item.parent_id]) {
                    obj[item.parent_id].push(item);
                } else {
                    obj[item.parent_id] = [item];
                }
            }
        });
        let list: Array<JSX.Element> = [];
        words.forEach((item, index) => {
            if (item.parent_id == 0) {
                let dom :any = [];
                if (obj[item.id]) {
                    obj[item.id].forEach((i:any, _index:number) => {
                        dom.push(<XqjItem item={i} key={_index}/>);
                    });
                }
                list.push(<XqjItem item={item} key={index}>{dom}</XqjItem>);
            }
            if (item.parent_id == -1) {
                list.push(<div className="xqj-shenItem" key={index}><span className="xqj-shen">{item.info}</span></div>)
            }
        });
        return (
            <div className="xqj-main">
                <div className="xqj-content">
                    <div className="xqj-title">留言板</div>
                </div>
                <div className="xqj-content">
                    <div className="xqj-list">{list}</div>
                </div>
                <Pager page={page} size={count} total={total} change={this.load}/>
            </div>
        );
    }

    renderLock () {
        return (
            <div className="xqj-lock">
                <div className="xqj-lock-form">
                    <input type="text" className="xqj-lock-input browser-default" placeholder="输入QQ号试试" ref="input"/>
                    <a href="javascript:;" className="xqj-lock-btn" onClick={() => this.unlock()}></a>
                    <div className="xqj-lock-tips">{this.state.showErr}</div>
                </div>
            </div>
        );
    }

    render () {
        if (this.state.show == 0) {
            return this.renderLock();
        } else {
            return this.renderList();
        }
    }
}

interface XqjItemProps { item: any };
class XqjItem extends React.Component<XqjItemProps, {}> {
    render () {
        const {info, time, user_name, id} = this.props.item;
        let avatar = jhq;
        if (user_name == '小青椒') {
            avatar = xyt;
        }
        return (
            <div className="xqj-item">
                <div className="xqj-item-top">
                    <div className="xqj-item-time">{time}</div>
                    <div className="xqj-item-name">{user_name}</div>
                </div>
                <div className="xqj-item-content">
                    <span className="xqj-item-text">{info}</span>
                    <span className="xqj-item-id">#{id}</span>
                    {this.props.children}
                </div>
                <div className="xqj-item-avatar"><img src={avatar} alt={user_name}/></div>
            </div>
        )
    }
}
