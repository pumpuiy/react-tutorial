import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './container/Home';
import Order from './container/order/Order';
import Product from './container/product/Product';
import About from './container/About';
import NotFound from './container/error/NotFound';
import ProductEdit from "./container/product/ProductEdit";

class App extends Component{

  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/add" component={ProductEdit} />
        <Route exact path="/products/edit/:id" component={ProductEdit} />
        <Route exact path="/about" component={About} />

        <Route component={NotFound} />
      </Switch>
    );
  }

  render(){
    return (
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    );
  }
  
}

export default App;
