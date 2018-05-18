import * as React from "react"
import './index.less'

export class Article extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="card article-content">
        <div className="card-content">
          <span className="card-title">标题</span>
          <p className="date-text">2018-12-12</p>
          <p>
            <span className="chip">标签</span>
          </p>
        </div>
      </div>
    )
  }
}
