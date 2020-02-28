import React from 'react';
import { List } from 'antd-mobile';
import "./index.css";
import { list1 } from '../data/list.json';

const knowledgeList = [{
  id: '111',
  name: 'A111',
  href: 'http://www.baidu.com'
},{
  id: '112',
  name: 'A111',
  href: 'http://www.baidu.com'
},{
  id: '113',
  name: 'A111',
  href: 'http://www.baidu.com'
},{
  id: '114',
  name: 'A111',
  href: 'http://www.baidu.com'
},{
  id: '211',
  name: 'A111',
  href: 'http://www.baidu.com'
},{
  id: '212',
  name: 'A111',
  href: 'http://www.baidu.com'
},{
  id: '213',
  name: 'A111',
  href: 'http://www.baidu.com'
},{
  id: '214',
  name: 'A111',
  href: 'http://www.baidu.com'
},{
  id: '311',
  name: 'A111',
  href: 'http://www.baidu.com'
},]
const Item = List.Item; 
class App extends React.Component{
  constructor(){
    super();
    this.itemOnClick = this.itemOnClick.bind(this);
  }
  itemOnClick(id){
    const filterKnowledgeList = knowledgeList.filter((item)=>item.id.slice(0,2)===id);
    console.log(filterKnowledgeList)
  }
  render(){

    return (

        <div className="content">
          {
            list1.map((chapter,index)=>(
              <React.Fragment key={index}>
                <div className="chapterName">
                  {chapter.name}
                </div>
                <List>
                {
                  chapter.children.map((item,index)=>(
                  <Item
                    key={index}
                    arrow='horizontal'
                    onClick={()=>this.itemOnClick(item.id)}
                  >{item.name}</Item>
                  ))
                }
                </List>
              </React.Fragment>
            ))
          }
        </div>
    );
  }
}

export default App;
