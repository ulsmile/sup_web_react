import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import AppBarComponent from './commons/components/AppBarComponent'
import HeaderTab from './commons/components/HeaderTab'

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
					 <HeaderTab />
	       <Router>
           <div style={{padding: '10px'}}>
               <p>
                   <Link to="/">Home</Link>&nbsp;
                   <Link to="/about">About</Link>&nbsp;
                   <Link to="/contact">Contact</Link>&nbsp;
               </p>

               <Route path="/:id" component={Child}/>
               <Route exact path="/" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/contact" component={Contact}/>


					</div>
       </Router>
    </div>
)

export default AppComponents
