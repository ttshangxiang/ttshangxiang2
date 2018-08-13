import * as React from 'react'
import './index.less'

export class Comment extends React.Component<{}, {}> {
  render () {
    return (
      <div className="row comment-root">
        <div className="input-field col s12" style={{position: 'relative', paddingRight: 50}}>
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">写评论</label>
          <a className="btn-floating waves-effect waves-light grey" style={{position: 'absolute', right: '0.5rem', bottom: '1.8rem'}}><i className="material-icons">check</i></a>
        </div>
        <ul className="collection col s12">
          <li className="collection-item avatar">
            <img src="http://www.materializecss.cn/images/yuna.jpg" alt="" className="circle"/>
            <div className="nickname">领导</div>
            <div className="comment-info">
              <span>2018-02-10 05:20</span>
              <span>回复</span>
            </div>
            <div className="comment-content">罗立雄不听话</div>
            <SubComment/>
          </li>
        </ul>
      </div>
    )
  }
}

class SubComment extends React.Component<{}, {}> {
  render () {
    return (
      <ul className="collection col s12 sub-comment">
        <li className="collection-item avatar">
          <img src="http://www.materializecss.cn/images/yuna.jpg" alt="" className="circle"/>
          <div className="nickname">罗立雄：<span className="sub-comment-content">呸</span></div>
          <div className="comment-info">
            <span>2018-02-10 05:20</span>
            <span>回复</span>
          </div>
        </li>
        <li className="collection-item avatar">
          <img src="http://www.materializecss.cn/images/yuna.jpg" alt="" className="circle"/>
          <div className="nickname">其他人：<span className="sub-comment-content">👏👏👏</span></div>
          <div className="comment-info">
            <span>2018-02-10 05:20</span>
            <span>回复</span>
          </div>
        </li>
      </ul>
    )
  }
}