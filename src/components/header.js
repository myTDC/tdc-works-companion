import PropTypes from "prop-types"
import React from "react"

import logo_edu from "../images/educate.svg";
import style from '../styles/header.module.css';

const Header = ({ siteTitle, siteNav, auth }) => (
  <header className={style.nav} >
    <Link to="/"
    className={style.mainLink}>
      <img className={style.logo} src={logo_edu} alt="logo of TDC Educate Department" />
      <h2 className={style.title} >{siteTitle}</h2>
    </Link>
    <aside className={style.linkContainer}>
        {siteNav.map(link => (
          <Link className={style.links} to={link.to} key={link.i}>
        {/*JSON.stringify(siteNav.index)*/}
            {link.label}
          </Link>
        ))}
      </aside>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteNav: PropTypes.arrayOf,
}

Header.defaultProps = {
  siteTitle: ``,
  siteNav: [
    {
      "label": "Home",
      "to": "/"
    },
    {
      "label": "Journey",
      "to": "/journey"
    },
    {
      "label": "Registration",
      "to": "/registration"
    },
    {
      "label": "TDC",
      "to": "/tdc"
    },
  ]
}

export default Header
