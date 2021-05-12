import React, { Component, PropTypes } from 'react'

class Logger extends Component {

  constructor(props){
    super(props);
  }

  render(){

    const { handleClose } = this.props

    return(
      <div>
        <form method="POST" action="/login" className="logger__form">
          <label htmlFor="username" className="logger__label">Username</label>
          <input type="text" name="username" className="logger__input"/>
          <label htmlFor="password" className="logger__label">Password</label>
          <input type="text" name="password" className="logger__input"/>
          <div className="logger__button__container">
            <button type="button" className="logger__button" onClick={handleClose}>Annuler</button>
            <button type="submit" className="logger__button">Connexion</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Logger;