import * as React from 'react';
import './index.less';
import { LoginCard } from './login';
import { RegisterCard } from './register'

interface state {
  show: boolean,
  card: string
}

export class Login extends React.Component <{}, state> {
  constructor (props:any) {
    super(props)
    this.state = {
      card: 'login',
      show: true
    }
    this.toggle = this.toggle.bind(this)
    this.hide = this.hide.bind(this)
  }

  toggle () {
    this.setState({
      card: this.state.card == 'login' ? 'register' : 'login'
    })
  }

  hide () {
    this.setState({
      show: false
    })
  }

  render () {
    let ShowCard = this.state.card == 'login' ? LoginCard : RegisterCard
    if (!this.state.show) {
      return (
        <div></div>
      );
    }
    return (
      <div className="login-root">
        <div className="login-mask" onClick={this.hide}></div>
        <div className="login-box">
          <ShowCard toggle={this.toggle}/>
        </div>
      </div>
    )
  }
}