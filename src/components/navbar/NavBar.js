import React  from "react";
import styles from "./NavBar.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authAction";

const NavBar = (props) => {

  const linkStyle = {
    textDecoration: "none",
    color: "#000",
  };

  const handleClose = () => {
    document.getElementById('fullNav').style.width = "0";
  }

  const handleOpen = () => {
    document.getElementById('fullNav').style.width = "100%";
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h4>
          <Link to="/" style={linkStyle}>
            STEVE
          </Link>
        </h4>
        <div className={styles.icons}>
          <Link to="/about" style={linkStyle}>
            <span>ABOUT</span>
          </Link>
          <Link to="/catalog" style={linkStyle}>
            <span>CATALOG</span>
          </Link>
          { 
            props.isAuthenticated ? (
            <span onClick={props.logoutUser}>LOGOUT</span>
            ) : (
            <Link to="/login" style={linkStyle}>      
              <span>LOGIN</span>
            </Link>
            )
          }
          <Link to="/cart" style={linkStyle}>
            <span>CART</span>
          </Link>
        </div>
        <span className={styles.openIcon} onClick={handleOpen}></span>
      </div>
      <div id="fullNav" className={styles.fullNav}>
        <span className={styles.closeIcon} onClick={handleClose}></span>
        <div>
          <Link to="/about" style={linkStyle} onClick={handleClose}>
            <span>ABOUT</span>
          </Link>
          <Link to="/catalog" style={linkStyle} onClick={handleClose}>
            <span>CATALOG</span>
          </Link>
          { 
            props.isAuthenticated ? (
            <span onClick={props.logoutUser}>LOGOUT</span>
            ) : (
            <Link to="/login" style={linkStyle} onClick={handleClose}>      
              <span>LOGIN</span>
            </Link>
            )
          }
          <Link to="/cart" style={linkStyle} onClick={handleClose}>
            <span>CART</span>
          </Link>          
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
