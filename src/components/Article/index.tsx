import * as React from 'react'
import './index.less'
import { Comment } from '../Comment'

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
          <Comment/>
        </div>
      </div>
    )
  }
}


