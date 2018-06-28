import * as React from "react"
import './index.less'

interface props {
  total: number,
  page: number
  size: number,
  change: Function
}

export class Pager extends React.Component<props, {}> {
    constructor (props:any) {
        super(props);
    }

    newDom () {
      const { total, size, page, change } = this.props;
      const pageNum = Math.ceil(total / size) || 0;
      const index = page + 1;
      let cindex = index;
      let arr :Array<number> = [];

      if (pageNum <= 7) {
          //page less than 7
          for (let i = 0; i < pageNum; i++) {
              arr.push(i + 1);
          }
          return arr;
      }
      if (index <= 4) {
          //page1 ~ page4
          cindex = 3;
      } else {
          arr.push(1, -1);
      }
      if (index >= pageNum - 3) {
          //page n-3 ~ page n
          cindex = pageNum - 2;
      }
      for (let i = cindex - 2; i <= cindex + 2; i++) {
          // page normal
          arr.push(i);
      }
      if (index < pageNum - 3) {
          //page n-3 ~ page n
          arr.push(-1, pageNum);
      }
      let dom = [];
      if (index == 1) {
        dom.push(<li key="prev"><span>«</span></li>)
      } else {
        dom.push(<li key="prev"><a className="waves-effect waves-light" onClick={() => change(page - 1)}>«</a></li>)
      }

      for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (item == -1) {
          dom.push(<li key={i}><span>...</span></li>)
        } else {
          if (index == item) {
            dom.push(<li key={i}><span>{item}</span></li>)
          } else {
            dom.push(<li key={i}><a className="waves-effect waves-light" onClick={() => change(item - 1)}>{item}</a></li>)
          }
        }
      }

      if (index == pageNum) {
        dom.push(<li key="next"><span>»</span></li>)
      } else {
        dom.push(<li key="next"><a className="waves-effect waves-light" onClick={() => change(page + 1)}>»</a></li>)
      }

      return dom
    }

    render() {
      return (
        <ul className="pagination">
          {this.newDom()}
        </ul>
      )
    }
}