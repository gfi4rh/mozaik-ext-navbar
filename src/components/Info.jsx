import React, { Component } from 'react'

class Info extends Component {

  constructor(props){
    super(props)
  }

  render(){

    const {
      version,
      last_commit,
      last_build,
      commit_author,
      commit_message
    } = this.props.info

    return(
      <div className="info__container">{version}</div>
    )
  }

}

export default Info;