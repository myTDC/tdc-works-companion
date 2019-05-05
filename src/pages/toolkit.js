import React, { useState, useEffect } from "react"
import { Router, Link } from "@reach/router"
import Page404 from "./404"

import styles from "../styles/tools.module.css"
import hero from "../res/imgs/toolkit-home-optim.svg"
// import herov2 from "../res/imgs/tdc-toolkit-homi-o.svg"
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
      <img src={hero} alt="homepage illustration for TDC toolkit" className={styles.hero} style={{ width: "100%", minWidth: `${width}px` }} />
      </section>
      <section className={styles.fore}>I have all the cool tools.</section>
    </>
  )
}

const Toolkit = props => {
  const imageUrl = useWindowWidth() >= 650 ? "desktopImage" : "mobileImage";

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

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};

Toolkit.propTypes = {}

export default Toolkit
