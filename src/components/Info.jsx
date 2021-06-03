import React, { Component } from 'react'

class Info extends Component {

  constructor(props){
    super(props)
  }

  render(){

    const { version } = this.props

    return(
      <div className="info__container">{version}</div>
    )
  }

}

export default Info;