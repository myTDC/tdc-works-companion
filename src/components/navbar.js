import React from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"

import styles from "../styles/nav.module.css"
import logo from "../res/imgs/tdc-reach-full-ondark.svg"
import { ReactComponent as Avatar } from "../res/imgs/user-outline-optim.svg"

const Navbar = ({ user }) => {
  //TODO: Make the logo fit inside a link component
  return (
    <nav className={styles.container}>
      <header className={styles.head}>
        <img
          src={logo}
          className={styles.logo}
          alt="TDC Reach logo for Dark Backgrounds"
        />
        <Auth />
      </header>
      <aside className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="dashboard">Dashboard</Link>{" "}
        <Link to="invoices/123">Invoice 123</Link>{" "}
        <Link to="invoices/abc">Invoice ABC</Link>
      </aside>
    </nav>
  )
}

Navbar.propTypes = {
  user: PropTypes.string,
}

Navbar.defaultProps = {
  user: null,
}

export default Navbar

const Auth = ({ user }) =>
  user ? (
    <div>Log Out</div>
  ) : (
    <div className={styles.authContainer}>
      <Avatar
        className={styles.avatar}
        alt="TDC Reach logo for Dark Backgrounds"
      />
      <span>login</span>
    </div>
  )

Auth.propTypes = {
  user: PropTypes.string,
}

Auth.defaultProps = {
  user: null,
}
