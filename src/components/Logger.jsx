import React, { Component, PropTypes } from 'react'

class Logger extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <form action="POST">
          <label htmlFor="username">Username</label>
          <input type="text" name="username"/>
          <label htmlFor="password">Password</label>
          <input type="text" name="password"/>
          <button>Annuler</button>
          <button type="submit">Connexion</button>
        </form>
      </div>
    );
  }
}

export default Logger;