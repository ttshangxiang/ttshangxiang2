import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import { Login } from '../Login';

export class Layout extends React.Component <{}, {side: Boolean, sideAnimate: Boolean}> {
  constructor(props: any) {
    super(props);
    let kuan = window.innerWidth >= 1200;
    this.state = {side: kuan, sideAnimate: kuan}
  }

  sideNav () {
    if (this.state.side) {
      this.setState({sideAnimate: false});
      setTimeout(() => {
        this.setState({side: false})
      }, 200);
    } else {
      this.setState({side: true});
      setTimeout(() => {
        this.setState({sideAnimate: true});
      }, 10)
    }
  }

  componentDidMount () {
    window.onresize = () => {
      if (window.innerWidth < 1200) {
        this.setState({side: false});
      }
    }
  }

  render() {
    const { side, sideAnimate } = this.state;
    return (
      <div className={'jhq-layout ' + (side ? 'slider-nav-show ' : '') + (sideAnimate ? 'slider-nav-animate ' : '')}>
        <Login/>
        <nav className="jhq-nav">
          <div className="nav-wrapper">
            <a className="btn-floating btn-large z-depth-0 transparent waves-effect"
              style={{marginLeft: 4}}
              onClick={this.sideNav.bind(this)}>
              <i className="material-icons" style={{color: '#999'}}>menu</i>
            </a>
            <a href="javascript:;" className="brand-logo"></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="javascript:;">菜单</a></li>
              <li><a href="javascript:;">菜单</a></li>
              <li><a href="javascript:;">傻逼</a></li>
            </ul>
          </div>
        </nav>
        <div className={'slider-nav-wrapper'}>
          <div className="slider-nav-mask" onClick={this.sideNav.bind(this)}></div>
          <div className="slider-nav grey lighten-4">
            <div className="slider-nav-header">
              <a className="btn-floating btn-large z-depth-0 transparent waves-effect"
                onClick={this.sideNav.bind(this)}>
                <i className="material-icons" style={{color: '#999'}}>menu</i>
              </a>
            </div>
            <div className="collection jhq-collection">
              <a href="javascript:;" className="collection-item waves-effect"><i className="material-icons">assignment</i><span>说说</span></a>
              <a href="javascript:;" className="collection-item waves-effect"><i className="material-icons">assignment</i><span>日志</span></a>
            </div>
            <div className="collection jhq-collection">
              <div className="collection-item">生涯</div>
              <a href="javascript:;" className="collection-item waves-effect"><i className="material-icons">assignment</i><span>照片</span></a>
              <a href="javascript:;" className="collection-item waves-effect"><i className="material-icons">assignment</i><span>游戏</span></a>
              <a href="javascript:;" className="collection-item waves-effect"><i className="material-icons">assignment</i><span>音乐</span></a>
              <a href="javascript:;" className="collection-item waves-effect"><i className="material-icons">assignment</i><span>影视</span></a>
            </div>
            <div className="collection jhq-collection">
              <div className="collection-item">更多</div>
              <a href="javascript:;" className="collection-item waves-effect"><i className="material-icons">assignment</i><span>留言</span></a>
              <a href="javascript:;" className="collection-item waves-effect"><i className="material-icons">assignment</i><span>关于</span></a>
            </div>
          </div>
        </div>
        <div className="jhq-main">{this.props.children}</div>
      </div>
    );
  }
};