import React from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";
import "./Products.css";

function Products() {
  return (
    <div className="products-container">
      <h1>Products</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/products/addproduct">Add Product</Link>
            </li>
            <li>
              <Link to="/products/updateproduct">Update Product</Link>
            </li>
            <li>
              <Link to="/products/deleteproduct">Delete Product</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/products/addproduct" exact component={AddProduct} />
          <Route
            path="/products/updateproduct"
            exact
            component={UpdateProduct}
          />
          <Route
            path="/products/deleteproduct"
            exact
            component={DeleteProduct}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Products;
