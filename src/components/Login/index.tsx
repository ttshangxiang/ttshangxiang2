import * as React from 'react';
import './index.less';
import { LoginCard } from './login';
import { RegisterCard } from './register'

interface state {
  show: string
}

export class Login extends React.Component <{}, state> {
  constructor (props:any) {
    super(props)
    this.state = {
      show: 'login'
    }
  }

  toggle () {
    this.setState({
      show: this.state.show == 'login' ? 'register' : 'login'
    })
  }

  render () {
    let ShowCard = this.state.show == 'login' ? LoginCard : RegisterCard
    return (
      <div className="login-root">
        <div className="login-mask"></div>
        <div className="login-box">
          <ShowCard toggle={this.toggle.bind(this)}/>
        </div>
      </div>
    )
  }
}