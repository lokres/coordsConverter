import React, {Component, useContext} from 'react';
import './App.css';
import {CubeGrid} from 'styled-loaders-react';
import MainData from './MainData.js';
import Context from './Context.js'

class App extends Component {
state = {
    loading : true
}

componentDidMount() {
    setTimeout(()=> {this.setState({loading:false})}, 1000)
}


render() {
  return (
        <Context.Provider value={{center: [55.751574, 37.573856],zoom: 5,}}>
        <div className="wrapper">
        {this.state.loading ? <div className="preloader"><CubeGrid /></div> : ''}
        <MainData />
        </div>
        </Context.Provider>
      );
    }
}
export default App;









