import './App.css';
import {Navbar} from './components/Navbar.js'
import News from './components/News';
import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  pagesize=14;

  state={
    progress:0
  }
  
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render(){
  return (
    <>
    <Router>
    <LoadingBar
        color='red'
        progress={this.state.progress}
      />
    <Navbar/>
    <Switch>
    <Route exact path='/'><News key="default" country='in' category='sports' pagesize={this.pagesize} updateProgress={this.setProgress} /></Route>
    <Route exact path='/sports'><News key="sports" country='in' category='sports' pagesize={this.pagesize} updateProgress={this.setProgress} /></Route>
    <Route exact path='/business'><News key='business' country='in' category='business' pagesize={this.pagesize} updateProgress={this.setProgress} /></Route>
    <Route exact path='/technology'><News key='technology' country='in' category='technology' pagesize={this.pagesize} updateProgress={this.setProgress} /></Route>
    <Route exact path='/entertainment'><News key='entertainment' country='in' category='entertainment' pagesize={this.pagesize} updateProgress={this.setProgress} /></Route>
    <Route exact path='/health'><News key='health' country='in' category='health' pagesize={this.pagesize} updateProgress={this.setProgress} /></Route>
    <Route exact path='/science'><News key='science' country='in' category='science' pagesize={this.pagesize} updateProgress={this.setProgress} /></Route>
    </Switch>
    </Router>
    </>
  );
}
}

export default App;
