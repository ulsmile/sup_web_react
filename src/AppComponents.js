import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AppBarComponent from './commons/components/AppBarComponent'
import HeaderTab from './commons/components/HeaderTab'
import Mypage from './pages/Mypage'
import Chart from './pages/Chart'
import RecordTime from './pages/RecordTime'
import Ranking from './pages/Ranking'
import Login from './pages/Login'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Contact = () => (
    <div>
        <h2>Contact</h2>
    </div>
)

const Child = ({ match }) => (
    <div>
        <p>{match.params.id}</p>
    </div>
)
const AppComponents = () => (
    <div style={{ padding: '10px 10px' }}>
      <AppBarComponent />
         <Router>
           <div>
             <HeaderTab />
             <Route path="/login" component={Login}/>
             <Route exact path="/" component={Home}/>
             <Route path="/:id" component={Child}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/mypage" component={Mypage}/>
             <Route path="/chart" component={Chart}/>
             <Route path="/record_time" component={RecordTime}/>
             <Route path="/ranking" component={Ranking}/>
           </div>
         </Router>
    </div>
)

export default AppComponents
//	       <Router>
       /*    <div style={{padding: '10px'}}>
               <p>
                   <Link to="/">Home</Link>&nbsp;
                   <Link to="/about">About</Link>&nbsp;
                   <Link to="/contact">Contact</Link>&nbsp;
               </p>*/

