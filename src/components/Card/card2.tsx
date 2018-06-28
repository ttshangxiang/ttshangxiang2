import * as React from 'react';
import './card2.less';

interface props {
  color?: string
}

export class Card extends React.Component <props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={'card card2 ' + this.props.color}>
        <div className="date-circle">
          <span className="month">Apr</span>
          <br/>
          <span className="day">30</span>
          <br/>
          <span className="year">2018</span>
        </div>
        <div className="card-image">
          <img src={require('./example-work07.jpg')}/>
        </div>
        <div className="card-content">
          <span className="card-title">【二次】COMIC1☆13新刊表紙</span>
          <p>我是一个很简单的卡片。我很擅长于包含少量的信息。我很方便，因为我只需要一个小标记就可以有效地使用。</p>
        </div>
        {/* <div className="card-action">
          <a href="#">这是一个链接</a>
        </div> */}
      </div>
    );
  }
};