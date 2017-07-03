import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import AppBarComponent from './commons/components/AppBarComponent'
import HeaderTab from './commons/components/HeaderTab'
import Mypage from './pages/Mypage'
import Chart from './pages/Chart'
import RecordTime from './pages/RecordTime'
import Ranking from './pages/Ranking'
import Login from './pages/Login'

const Child = ({ match }) => (
    <div>
        <p>{match.params.id}</p>
    </div>
)
const AppComponents = () => (
    <div style={{ padding: '10px 10px' }}>
         <Router>
           <div>
             <HeaderTab />
             <Route path="/login" component={Login}/>
             <Route path="/mypage" component={Mypage}/>
             <Route path="/chart" component={Chart}/>
             <Route path="/record_time" component={RecordTime}/>
             <Route path="/ranking" component={Ranking}/>
             <Route path="/:id" component={Child}/>
           </div>
         </Router>
    </div>
)

export default AppComponents
      //<AppBarComponent />
             //<Route exact path="/" component={Home}/>
