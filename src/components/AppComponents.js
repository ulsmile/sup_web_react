import React from 'react'
import FooterComponent from './FooterComponent'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer'
import AddPlayerContainer from '../containers/AddPlayerContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import HomeComponent from './Home/HomeComponent'
//import AppBar from 'material-ui/AppBar';
import AppBarComponent from './AppBarComponent'
//import PlayerListContainer from '../containers/PlayerListContainer'

//const AppComponents = () => (
//  <div>
//    <AddTodoContainer />
//    <VisibleTodoListContainer />
//    <FooterComponent />
//    <AddPlayerContainer />
//	</div>
//
//)


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
        <p>今{match.params.id}を表示しています</p>
    </div>
)
const AppComponents = () => (
    <div style={{ padding: '10px 10px' }}>
			<AppBarComponent />
	       <Router>
           <div style={{padding: '10px'}}>
               <p>
                   <Link to="/">Home</Link>&nbsp;
                   <Link to="/about">About</Link>&nbsp;
                   <Link to="/contact">Contact</Link>&nbsp;
                   <Link to="/add_player">メンバー専用</Link>&nbsp;
               </p>

               <Route exact path="/" component={HomeComponent}/>
               <Route path="/about" component={About}/>
               <Route path="/contact" component={Contact}/>
               <Route path="/add_player" component={AddPlayerContainer}/>

               <Route path="/:id" component={Child}/>
					</div>
       </Router>
    </div>
)

export default AppComponents
