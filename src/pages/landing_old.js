import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getDataWorksV1, addDataWorksV1, testRead } from "../redux/actions/admin"

import styles from "../styles/landing.module.css"

import Img from "../components/ImgExt"

class Landing extends Component {
  state = {
    user: null,
    winWidth: window.innerWidth,
  }
  static propTypes = {
    herosrc: PropTypes.string,
    heroSrcInternal: PropTypes.string,
  }
  static defaultProps = {
    herosrc: `https://images.unsplash.com/photo-1550784644-7f9460140af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&`,
    heroSrcInternal: `url(https://images.unsplash.com/photo-1550784644-7f9460140af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${window.innerWidth *
      2.5}&q=70)`,
  }

  getWindowSize() {
    this.setState(prevState => {
      return {
        ...prevState,
        winWidth: window.innerWidth,
      }
    })
  }

  componentDidMount() {
    this.getWindowSize()
    //listentoDataWorksV1()
  }
  compoentDidUpdate() {
    this.getWindowSize()
  }

  render() {
    return (
      <>
        <div
          className={styles.heroContainer}
          style={{ backgroundImage: `${this.props.heroSrcInternal}`}}
        >
          {/* */}
          <div style={{ backgroundColor: `#16243290` }}>
            <h1>
              So you've finally come! I've been{" "}
              <span className="highlight">waiting for you!</span>
            </h1>
            <p>
              Your URI is: {JSON.stringify(this.props.uri)} from the path:{" "}
              {JSON.stringify(this.props.location.href)}
            </p>

            <p onClick={this.props.addData}>
              Add WS data to FS
            </p>
            <button onClick={testRead} >Text Now</button>
            <button onClick={this.props.getData} >Get Data</button>
          </div>
        </div>
        <div style={{ backgroundColor: `#16243290` }}>
          <Img
            src={this.props.herosrc}
            alt="Some things are worth your time. So much so that when you focus on them, everything else just becomes a blur."
          />
          <Img
            src={this.props.herosrc}
            alt="Some things are worth your time. So much so that when you focus on them, everything else just becomes a blur."
          />
          <Img
            src={this.props.herosrc}
            alt="Some things are worth your time. So much so that when you focus on them, everything else just becomes a blur."
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ auth: { count, user, usrInfo } }) => ({})

const mapDispatchToProps = dispatch => ({
  addData: () => dispatch(addDataWorksV1()),
  getData: () => dispatch(getDataWorksV1()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
