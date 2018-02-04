import * as React from "react";
import './index.less';
import { Sign } from '../Xqj/Sign';
import { Link } from 'react-router-dom';

interface ListProps {
    module: string,
    list ?: any,
    url: string
};
interface ListState {
    animate: boolean,
    list: any
};

export class List extends React.Component<ListProps, ListState> {
    constructor (props:any) {
        super(props);
        this.state = {
            animate: false,
            list: []
        }
    }

    setAnimate () {
        setTimeout(() => {
            this.setState({ animate: true });
        }, 1);
    }

    componentDidMount () {
        if (this.props.list) {
            this.setState({ list: this.props.list });
            this.setAnimate();
        } else {
            fetch(this.props.url)
            .then(response => response.json())
            .then(json => {
                if (json.code == 0) {
                    let list = json.data.map((item: any) => {
                        item.path = '/api/article/' + item._id;
                        return item;
                    })
                    this.setState({ list });
                    this.setAnimate();
                }
            })
        }
    }

    render() {
        let list = this.state.list;
        let index = 0;
        let dom = list.map((item:any) => {
            index++;
            return (
                <li className="module-list-item" key={index}>
                    <Link to={item.path}>{item.title}</Link>
                </li>
            );
        });
        let animate = this.state.animate ? 'animate' : '';
        return (
            <div>
                <div className="module-top">
                    <a href="/" className={'module-name ' + animate}>{this.props.module}</a>
                </div>
                <div>
                    <ul className={"module-list " + animate}>
                        {dom}
                    </ul>
                    {this.props.children}
                </div>
            </div>
        );
    }
};