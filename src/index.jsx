import React, { Component } from 'react'

class ScrollHeightProvider extends Component {
  constructor(props){
    super(props)

    this.state = {
        scrollHeight: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll.bind(this))
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll.bind(this))
  }
  
  listenToScroll () {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    
    const {onScroll = _ => {}} = this.props
    onScroll(scrolled)
    
    this.setState({
        scrollHeight: scrolled,
    })
  }

  render() {
      return (
        <React.Fragment>
            {this.props.children}
        </React.Fragment>
    );
  }
}

module.exports = {
    Provider: ScrollHeightProvider
  }