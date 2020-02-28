import React from 'react';
import { NavBar } from 'antd-mobile';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import List1 from './List1';
import List2 from './List2';
import KnowledgeList from './KnowledgeList';

function Router(){
    const navbarName = '数学思维的教与学';
    return(
        <div>
            <NavBar
                mode="dark"
                >
            {navbarName}
            </NavBar>
            <BrowserRouter>
            <Switch>
                <Route path="/list1" component={List1}></Route>
                <Route path="/list2" component={List2}></Route>
                <Route path="/knowledgelist" component={KnowledgeList}></Route>
            </Switch>
            </BrowserRouter>
        <div className="footer">
          <div className='qrcode'>
          <img alt='qrcode' src={require('./data/qrcode.jpg')}></img>
          </div>
          <div className='qrcodeText'>详情推荐关注公众号</div>
        </div>
        </div>

    )
}

export default Router;