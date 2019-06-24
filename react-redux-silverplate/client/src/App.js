import React, {Component} from 'react';
import './App.css';
import {printHelloWorld} from './actions/printHelloAction';
import {connect} from 'react-redux';

class App extends Component{

  printHelloWorldClick = () => {
    console.log('printHelloWorld() props..');
    this.props.showhello(); //This is mapped in mapActionToProps
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.printHelloWorldClick} >Click Me!!</button>
          {this.props.showmessage} {/* mapStateToProps */}
        </header>
      </div>
    );
  }
  
}

const mapActionToProps = {
    showhello:printHelloWorld //Props:Action
}

const mapStateToProps=(state)=> {
  console.log('mapStateToProps ....');
  console.log(` mapStateToProps -> ${JSON.stringify(state.data)}`);
  return {showmessage:state.data.message} //Props:State --> data in Reducers
}

export default connect(mapStateToProps, mapActionToProps)(App); //Connect component to Redux Store
