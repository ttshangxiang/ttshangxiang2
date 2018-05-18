import * as React from 'react';
import './index.less';

export class Card extends React.Component <{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={require('./example-work07.jpg')}/>
          <span className="card-title">标题</span>
        </div>
        <div className="card-content">
          <p>我是一个很简单的卡片。我很擅长于包含少量的信息。我很方便，因为我只需要一个小标记就可以有效地使用。</p>
        </div>
        {/* <div className="card-action">
          <a href="#">这是一个链接</a>
        </div> */}
      </div>
    );
  }
};