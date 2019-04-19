import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import { Link } from "@reach/router"
import { connect } from 'react-redux'

import signon from "../redux/actions/auth"

import styles from "../styles/nav.module.css"
import logo from "../res/imgs/tdc-reach-full-ondark.svg"
import { ReactComponent as Avatar } from "../res/imgs/user-outline-optim.svg"

export class Navbar extends PureComponent {
  static propTypes = {
    user: PropTypes.string,
  }

  static defaultProps = {
    user: null,
  }

  render() {
    const { isMobile } = this.props
    return (
      <header className={styles.container}>
      <aside className={styles.head}>
        <img
          src={logo}
          className={styles.logo}
          alt="TDC Reach logo for Dark Backgrounds"
        />
        {isMobile && this.renderAuth()}
      </aside>
      <nav className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="works">Works</Link>{" "}
        <Link to="tdc">TDC</Link>{" "}
        <Link to="register">Register</Link>
        {!isMobile && this.renderAuth()}
      </nav>
    </header>
    )
  }

  renderAuth() {
    const { user, join } = this.props
    return (
      user ? (
        <div className={styles.authContainer} onClick={join} >
          <Avatar
            className={styles.avatar}
            alt="TDC Reach logo for Dark Backgrounds"
          />
          <span>log out</span>
        </div>
      ) : (
        <div className={styles.authContainer} onClick={join} >
          <Avatar
            className={styles.avatar}
            alt="TDC Reach logo for Dark Backgrounds"
          />
          <span>login</span>
        </div>
      )
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
  join: () => dispatch(signon())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

//######## Functional Sour Soup ########
// const Navbar = ({isMobile, user, join}) => {
//   //TODO: Make the logo fit inside a link component
//   return (
//     <header className={styles.container}>
//       <aside className={styles.head}>
//         <img
//           src={logo}
//           className={styles.logo}
//           alt="TDC Reach logo for Dark Backgrounds"
//         />
//         {isMobile && <Auth funclick={join} />}
//       </aside>
//       <nav className={styles.links}>
//         <Link to="/">Home</Link>
//         <Link to="works">Works</Link>{" "}
//         <Link to="tdc">TDC</Link>{" "}
//         <Link to="register">Register</Link>
//         {!isMobile && <Auth funclick={join} />}
//       </nav>
//     </header>
//   )
// }

// Navbar.propTypes = {
//   user: PropTypes.string,
// }

// Navbar.defaultProps = {
//   user: null,
// }

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = dispatch => ({ 
//   join: () => dispatch(signon()) 
// })


// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

// const Auth = ({ user, funclick }) =>
//   user ? (
//     <div className={styles.authContainer} onClick={funclick} >
//       <Avatar
//         className={styles.avatar}
//         alt="TDC Reach logo for Dark Backgrounds"
//       />
//       <span>log out</span>
//     </div>
//   ) : (
//     <div className={styles.authContainer} onClick={funclick} >
//       <Avatar
//         className={styles.avatar}
//         alt="TDC Reach logo for Dark Backgrounds"
//       />
//       <span>login</span>
//     </div>
//   )

// Auth.propTypes = {
//   user: PropTypes.string,
// }

// Auth.defaultProps = {
//   user: null,
// }