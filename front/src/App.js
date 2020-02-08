import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nheader from './components/header'
import Nproduct from './page/product'
import order from './page/order'
class App extends Component {
  render() {
    return (
      <>
      <Nheader/>
      <Nproduct/>
      </>
    );
  }
}
export default App;


