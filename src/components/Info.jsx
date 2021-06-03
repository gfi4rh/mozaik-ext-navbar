import React, { Component } from 'react'

class Info extends Component {

  constructor(props){
    super(props)
  }

  render(){

    const { info } = this.props

    return(
      <div className="info__container">
        <p>Version : <b>{info.version}</b></p>
        <hr/>
        <p>Dernier commit : <b>{info.last_commit}</b></p>
        <p>Autheur : <b>{info.commit_author}</b></p>
        <p>Message : <b>{info.commit_message}</b></p>
        <hr/>
        <p>Build timestamp : <b>{info.last_build}</b></p>
        <p></p>
    </div>
    )
  }

}

export default Info;