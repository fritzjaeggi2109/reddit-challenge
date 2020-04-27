import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import classes from "../css/header.module.css";
import logo from "../assets/images/reddit.png";

const Header = ({ path, label, click }) => {
  const handleLinkClick = () => {
    const newPath = path === "/" ? "/gallery" : "/";
    const newLabel = path === "/" ? "Gallery" : "Home";
    click(newPath, newLabel);
  };

  return (
    <div className={classes.header}>
      <Link to="/">
        <img alt="Reddit" src={logo} className={classes.headerLogo} />
      </Link>
      <Link className={classes.headerLink} to={path} onClick={handleLinkClick}>
        <div className={classes.headerLinkContainer}>
          <span>{label}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
