import React from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"

const Page404 = props => {
  return (
    <div>
      <h1>Uh-oh seems you're lost in the expanse of TDC Universe.</h1>

      <h2>We hear you were looking for {JSON.stringify(props)}</h2>

      <h2>How about we show you the way back to</h2><Link to="/">home?</Link>
    </div>
  )
}

Page404.propTypes = {
  url: PropTypes.string,
}

export default Page404
