import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import './Components/Header/header.css'
import './Components/Form/form.css'
import './Components/Product/product.css'
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Inventory: [
        {
        
        }

      ]
    }
  }

  componentDidMount() {
    Axios
    .get("/api/products") 
    .then (response => {
      this.setState({Inventory: response.data})
    })
    .catch(() => console.log('error'))
  }

  AddProducts() {
    Axios
    .post("/api/products")
    .then (response => {
      this.setState({
        Inventory: response.data
      })
    })
  }

  

  render() {
  return (
    <div className="App">
    <Header/>
    <Dashboard inventory = {this.state.Inventory}/>
    <Form inventory = {this.state.Inventory} AddProducts={this.AddProducts}/>

    </div>
  );
}
}

export default App;
