import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ error: "" });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.container}>
        <div className={styles.img}></div>  
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <h1>REGISTER</h1>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            required
          />
          <input
            type="submit"
            className={styles.submit}
            value="REGISTER"
            disabled={this.props.isLoading}
          />
          <p className={styles.error}>{this.props.error}</p>
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

export default connect(mapStateToProps, { registerUser })(Register);
