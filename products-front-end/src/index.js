import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import App from './App';
import ProductsList from './productsList';
import ViewProduct from './viewProduct';
import AddProduct from './addProductForm';
import EditProduct from './editProductForm';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          {/* view all products */}
          <Route path="/" component={ProductsList} exact/>
          {/* view single product */}
          <Route path="/view/:productId" component={ViewProduct} />
          {/* add new page */}
          <Route path="/addProduct" component={AddProduct} />
          {/* edit product */}
          <Route path="/editProduct" component={EditProduct} />
      </Switch>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
