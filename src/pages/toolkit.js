import React from "react"
import { Router, Link } from "@reach/router"
import Page404 from "./404"

import styles from "../styles/tools.module.css"
// import hero from "../res/imgs/toolkit-home-optim.svg"
import herov2 from "../res/imgs/tdc-toolkit-homi-o.svg"
import Valuations from "./tools/valuations"

const ToolsNav = props => {
  return (
    <nav className={styles.toolsNav}>
      We really like our tools.
      <aside className={styles.linksContainer}>
        <Link to="/toolkit">Toolkit Home</Link>{" "}
        <Link to="find-valuation">Startup Valuation</Link>{" "}
      </aside>
    </nav>
  )
}

export const Tools = (props) => {
  const { width } = props;
  return (
    <>
      <section className={styles.heroContainer}>
      <img src={herov2} alt="homepage illustration for TDC toolkit" className={styles.hero} style={{ width: `${width}` + `px` }} />
      </section>
      <section className={styles.fore}>I have all the cool tools.</section>
    </>
  )
}

const Toolkit = props => {
  return (
    <div className={styles.container}>
      <ToolsNav />
      <Router>
        <Tools path="/" width={props.width} />
        <Valuations path="find-valuation" width={props.width} />
        <Page404 default />
      </Router>
    </div>
  )
}

Toolkit.propTypes = {}

export default Toolkit
