import React, { Component, PropTypes } from 'react'

class Logger extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <form action="GET" className="logger__form">
          <label htmlFor="username" className="logger__label">Username</label>
          <input type="text" name="username" className="logger__input"/>
          <label htmlFor="password" className="logger__label">Password</label>
          <input type="text" name="password" className="logger__input"/>
          <div className="logger__button__container">
            <button className="logger__button">Annuler</button>
            <button type="submit" className="logger__button">Connexion</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Logger;