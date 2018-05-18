import * as React from "react";
import "./index.less";

interface article {
  title: string;
  create_date: string;
}

interface props {
  list: Array<article>;
}

export class ArticleList extends React.Component<props, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let list = this.props.list;
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      let o = list[i];
      arr.push(
        <article className="collection-item avatar" key={i}>
          <span className="title">{o.title}</span>
          <p className="date-text">{o.create_date.slice(0, 10)}</p>
          <p>
            <span className="chip">标签</span>
          </p>
        </article>
      );
    }
    return <section className="collection article-list">{arr}</section>;
  }
}
