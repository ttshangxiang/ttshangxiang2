import * as React from 'react';
import { Layout } from '../Layout';
import { Card } from '../Card';
import { ArticleList } from '../ArticleList'
import { Pager } from '../Pager'
import { Article } from '../Article'
import './index.less';

export class Material extends React.Component <{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(
        <div className="col s12 m6 l4">
          <Card/>
        </div>
      )
    }
    let article = (
      <div className="col s12">
          <Card/>
      </div>
    )
    let list = [{
      title: '嘻嘻嘻惺惺惜惺惺想寻',
      create_date: '2018-01-19 17:28:19'
    },{
      title: '嘻嘻嘻惺惺惜惺惺想寻',
      create_date: '2018-01-19 17:28:19'
    },{
      title: '嘻嘻嘻惺惺惜惺惺想寻',
      create_date: '2018-01-19 17:28:19'
    },{
      title: '嘻嘻嘻惺惺惜惺惺想寻',
      create_date: '2018-01-19 17:28:19'
    },{
      title: '嘻嘻嘻惺惺惜惺惺想寻',
      create_date: '2018-01-19 17:28:19'
    },{
      title: '嘻嘻嘻惺惺惜惺惺想寻',
      create_date: '2018-01-19 17:28:19'
    },{
      title: '嘻嘻嘻惺惺惜惺惺想寻',
      create_date: '2018-01-19 17:28:19'
    },{
      title: '嘻嘻嘻惺惺惜惺惺想寻',
      create_date: '2018-01-19 17:28:19'
    }]
    return (
      <Layout>
        <div className="row" style={{maxWidth: 900}}>
          {/* <div className="col s12">
            <ArticleList list={list}/>
            <Pager total={100} page={0} size={10} baseurl="/"/>
          </div> */}
          <div className="col s12">
            <Article/>
          </div>
        </div>
      </Layout>
    );
  }
};