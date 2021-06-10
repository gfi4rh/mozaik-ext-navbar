import React, { Component } from 'react'

class Info extends Component {

  constructor(props){
    super(props)
  }

  render(){

    const { info } = this.props

    return(
      <div className="info__container">
        <p>Version :&nbsp;<b>{info.version}</b></p>
        <hr/>
        <p>Dernier commit :&nbsp;<b>{info.last_commit}</b></p>
        <p>Autheur :&nbsp;<b>{info.commit_author}</b></p>
        <p>Message :&nbsp;<b>{info.commit_message}</b></p>
        <hr/>
        <p>Build timestamp :&nbsp;<b>{info.last_build}</b></p>
        <p></p>
    </div>
    )
  }

}

export default Info;