import React from "react";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Page404 from "./components/Page404/Page404";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import Loading from "./components/loading/Loading";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cart from "./components/cart/Cart";
import ProductPage from "./components/catalog/ProductPage";
import { connect } from "react-redux";
import { loadUser } from "./actions/authAction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser();
  }

  static propTypes = {
    loadUser: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <NavBar />
        { this.props.userLoading ? <Loading /> : 
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/catalog" component={Catalog} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/catalog/:id" component={ProductPage} />
              <Route component={Page404} />
            </Switch>
          </React.Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLoading: state.auth.isLoading,
})

export default connect(mapStateToProps, { loadUser })(App);
