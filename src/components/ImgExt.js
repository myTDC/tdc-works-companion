import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ImgExt extends Component {
  static propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  static defaultProps = {
    url: 'https://source.unsplash.com/random/500×300/?college+books',
    alt: 'coz we need a random image here',
    // width: window.innerWidth
    // width: 500,
    // height: 300,
  }

  state = {
    loaded: false,
    placeholderUrl: null,//this.placeholderSrc(this.props.width, this.props.height)
    winWidth: window.innerWidth,
  }

  // setLoaded(e) {
  //   this.setState({
  //     src: this.props.url,
  //     loaded: true
  //   });
  // }

  getWindowSize() {
    this.setState(prevState => {
      return{
        ...prevState,
        winWidth: window.innerWidth
      }
    })
  }

  compoentDidUpdate() {
    this.getWindowSize()
  }
  // placeholderSrc(width, height) {
  //   return null;
  //   //return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
  // }

  render() {

    const { src, alt } = this.props;
    const { placeholderUrl } = this.state;

    return (
      <React.Fragment>
        <React.Suspense delayMs={50} fallback={<img className="preview" src={placeholderUrl? placeholderUrl : src+`w=${(this.state.winWidth)/10}&q=10`} alt="I'm just a place holder"/>}>
          <img {...this.props} src={src+`w=${this.state.winWidth}&q=70`} alt={alt} />
        </React.Suspense>
      </React.Fragment>
    )
  }
}

export default ImgExt
