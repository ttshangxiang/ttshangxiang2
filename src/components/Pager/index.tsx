import * as React from "react"
import './index.less'

interface props {
  total: number,
  page: number
  size: number,
  baseurl: string
}

export class Pager extends React.Component<props, {}> {
    constructor (props:any) {
        super(props);
    }

    newDom () {
      const { total, size, page, baseurl } = this.props;
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
      const blank = 'javascript:;'

      let prev_class = 'waves-effect'
      let prev_href = baseurl + (page - 1)
      if (index == 1) {
        prev_class = 'disabled'
        prev_href = blank
      }
      dom.push(<li className={prev_class}><a href={prev_href}><i className="material-icons">chevron_left</i></a></li>)

      for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (item == -1) {
          dom.push(<li><span>...</span></li>)
        } else {
          let active_class = 'waves-effect'
          let active_href = baseurl + (item - 1)
          if (index == item) {
            active_class = 'active'
            active_href = blank
          }
          dom.push(<li className={active_class}><a href={active_href}>{item}</a></li>)
        }
      }

      let next_class = 'waves-effect'
      let next_href = baseurl + (page + 1)
      if (index == pageNum) {
        next_class = 'disabled'
        next_href = blank
      }
      dom.push(<li className={next_class}><a href={next_href}><i className="material-icons">chevron_right</i></a></li>)

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