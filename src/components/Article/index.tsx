import * as React from "react"
import './index.less'

export class Article extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="card article-card">
        <div className="card-content">
          <span className="card-title">标题</span>
          <p className="date-text">2018-12-12</p>
          <p>
            <span className="chip">标签</span>
          </p>
          <div className="article-content">
            <p>内容啊内容</p>
          </div>
        </div>
        <div className="card-action article-comment">
          <div className="row">
            <div className="input-field col s12" style={{position: 'relative'}}>
              <textarea id="textarea1" className="materialize-textarea"></textarea>
              <label htmlFor="textarea1">写评论</label>
              <a className="btn-floating waves-effect waves-light grey" style={{position: 'absolute', right: '0.5rem', bottom: '2.5rem'}}><i className="material-icons">check</i></a>
            </div>
            <ul className="collection col s12">
              <li className="collection-item avatar">
                <img src="http://www.materializecss.cn/images/yuna.jpg" alt="" className="circle"/>
                <span className="title">标题</span>
                <p>
                  第一行<br/>
                  第二行
                </p>
                <p className="comment-bottom">
                  <span>#77</span>
                  <span>2018-02-10 05:20</span>
                  <span className="span-icon"><i className="material-icons">thumb_up</i><span>259</span></span>
                  <span className="span-icon"><i className="material-icons">thumb_down</i><span></span></span>
                  <span>回复</span>
                </p>
                <ul className="collection">
                  <li className="collection-item avatar">
                    <img src="http://www.materializecss.cn/images/yuna.jpg" alt="" className="circle"/>
                    <p>第三句</p>
                    <p className="comment-bottom">
                      <span>#77</span>
                      <span>2018-02-10 05:20</span>
                      <span className="span-icon"><i className="material-icons">thumb_up</i><span>259</span></span>
                      <span className="span-icon"><i className="material-icons">thumb_down</i><span></span></span>
                      <span>回复</span>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
