
import * as React from 'react';

interface props {
  toggle: Function
}

interface states {
  userError: string
}

export class LoginCard extends React.Component <props, states> {
  constructor (props:any) {
    super(props)
    this.state = {
      userError: ''
    }
  }

  login () {
    const u_username: any = this.refs.u_username;
    const u_password: any = this.refs.u_password;
    if (u_username.value == '') {
      this.setState({userError: '用户名不能为空'})
      this.forceUpdate()
      return
    }
    const param = {u: u_username.value, p: u_password.value}
    fetch('/api/user/login', {
      method: 'post',
      body: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
  }

  render () {
    let userErrorCls = this.state.userError ? 'invalid' : ''
    return (
      <div className="card" style={{margin: '12px'}}>
        <div className="card-image teal" style={{height: 88}}>
          <span className="card-title">登录</span>
          <a className="btn-floating halfway-fab waves-effect waves-light btn-large teal lighten-2" onClick={() =>this.props.toggle()}><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <form>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="u_username" type="text" className={'validate ' + userErrorCls} ref="u_username"/>
                <label htmlFor="u_username" data-error={this.state.userError}>账号</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="u_password" type="password" className="validate" ref="u_password"/>
                <label htmlFor="u_password" data-error="wrong">密码</label>
              </div>
              <div className="" style={{textAlign: 'center'}}>
                <a className="waves-effect waves-light btn-large" style={{fontSize: 18, marginTop: 32}} onClick={this.login.bind(this)}>登录</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}