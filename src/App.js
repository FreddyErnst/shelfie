import React from 'react';
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
      inventory: []

    }
    this.AddProducts = this.AddProducts.bind(this)
  }

  componentDidMount() {
    Axios
    .get("/api/inventory") 
    .then (response => {
    this.setState({inventory: response.data})
    })
    .catch(() => console.log("error"))
}

  AddProducts() {
    Axios
    .post("/api/inventory")
    .then (response => {
      this.setState({
        inventory: response.data
      })
    })
    .catch ((err) => console.log(err))
  }

  

  render() {
    const {inventory} = this.state
  return (

    <div className="App">
    <Header/>
    <Dashboard inventory = {inventory}/>
    <Form inventory = {inventory} AddProducts={this.AddProducts}/>

    </div>
  );
}
}

export default App;
