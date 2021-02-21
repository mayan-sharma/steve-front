import React, { Component } from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      // error: "",
    };
  }

  handleChange = (e) => {
    this.setState({ error: "" });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.loginUser(this.state);
  };

  render() {

    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.container}>
        <div className={styles.img}></div>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <h1>LOGIN</h1>
          <div>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              placeholder="email"
              required
            />
            <input
              type="text"
              name="password"
              onChange={this.handleChange}
              placeholder="password"
              required
            />
          </div>
          <input
            type="submit"
            className={styles.submit}
            value="LOGIN"
            disabled={this.props.isLoading}
            />
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            <p className={styles.error}>{this.props.error}</p>
            {/* {this.state.error.length > 0 && (
              <p className={styles.error}>{this.state.error}</p>
            )} */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, { loginUser })(Login);
