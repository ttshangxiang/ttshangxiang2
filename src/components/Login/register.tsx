import * as React from 'react';

interface props {
  toggle: Function
}

export class RegisterCard extends React.Component <props, {}> {
  constructor (props:any) {
    super(props)
  }

  register () {
    const r_username: any = this.refs.r_username;
    const r_password: any = this.refs.r_password;
    const r_passwordc: any = this.refs.r_passwordc;
    const r_phone: any = this.refs.r_phone;
    if (r_username.value == '') {
      return;
    }
    if (r_password.value !== r_passwordc.value) {
      return;
    }
    let param = {u: r_username.value, p: r_password.value, phone: r_phone.value}
    fetch('/api/user/register', {
      method: 'post',
      body: JSON.stringify(param),
      headers: {
        'content-type': 'application/json;charset=UTF-8;'
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
  }

  render () {
    return (
      <div className="card" style={{margin: '12px'}}>
        <div className="card-image teal" style={{height: 88}}>
          <span className="card-title">注册</span>
          <a className="btn-floating halfway-fab waves-effect waves-light btn-large teal lighten-2" onClick={() =>this.props.toggle()}><i className="material-icons">reply</i></a>
        </div>
        <div className="card-content">
          <form>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="r_username" type="text" className="validate" ref="r_username"/>
                <label htmlFor="r_username" data-error="wrong">用户</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="r_password" type="password" className="validate" ref="r_password"/>
                <label htmlFor="r_password" data-error="wrong">密码（你甚至可以不填）</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="r_passwordc" type="password" className="validate" ref="r_passwordc" />
                <label htmlFor="r_passwordc" data-error="wrong">密码确认</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">phone</i>
                <input id="r_phone" type="tel" className="validate" ref="r_phone"/>
                <label htmlFor="r_phone" data-error="wrong">手机号（找回密码用）</label>
              </div>
              <div className="" style={{textAlign: 'center'}}>
                <a className="waves-effect waves-light btn-large" style={{fontSize: 18, marginTop: 32}} onClick={this.register.bind(this)}>注册</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}