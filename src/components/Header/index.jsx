import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import SpinningLogo from "./../SpinningLogo";
import nosbackground from "./../../assets/back.jpg";

const styles = {
  header: {
    backgroundColor: "#f0f0f0",
    color: "#333333",
    padding: "24px",
    marginBottom: "32px"
  },
  title: {
    fontSize: "1.5em"
  }
};

const Header = ({ classes, title }) => (
  <header className={classes.header}>
    <h2 className={classes.title}>{title}</h2>
  </header>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(Header);
