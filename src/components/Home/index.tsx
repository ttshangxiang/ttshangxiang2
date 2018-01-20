import * as React from "react";
import './index.less';

interface HomeProps {};
interface HomeState { animate: boolean };

export class Home extends React.Component<HomeProps, HomeState> {
    constructor (props:any) {
        super(props);
        this.state = {
            animate: false
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({ animate: true });
        }, 1);
    }

    render() {
        let list = [
            {name: '我', path: '/i'},
            {name: '我喜欢', path: '/like'},
            {name: '我不喜欢', path: '/!like'},
            {name: '我为什么喜欢', path: '/why'},
            {name: '我为什么不喜欢', path: '/!why'},
            {name: '我觉得', path: '/think'},
            {name: '我今天', path: 'daily'},
            {name: '关于', path: '/about'},
            {name: '----------', path: '/hello'}
        ];
        let index = 0;
        let dom = list.map(item => {
            index++;
            return (
                <li className="home-list-item" key={index}>
                    <a href={item.path}>{item.name}</a>
                </li>
            );
        });
        let animate = this.state.animate ? 'animate' : '';
        return (
            <div>
                <div className="home-top">
                    <a href="/" className={'home-name ' + animate}>TTshangxiang</a>
                </div>
                <div>
                    <ul className={"home-list " + animate}>
                        {dom}
                    </ul>
                </div>
            </div>
        );
    }
};