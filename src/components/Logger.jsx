import React, { Component, PropTypes } from 'react'

class Logger extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      username_status : true,
      password : '',
      password_status : true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    const regex = /^[a-zA-Z0-9!@#$&()\\-`.+,\"]*$/gm

    this.setState({
      [name] : e.target.value
    })

    this.setState({
      [name+'_status'] : regex.exec(value) != null
    })
  }

  handleSubmit(){
    const { username, username_status, password, password_status } = this.state

    if(username_status && password_status){
      const authToken  = fetch(`/login`,{
        method : 'POST',
        header : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          username : username,
          password : password
        })
      }).then(res => res.json())
      .then(json => json.authToken)

      if(authToken){
        document.cookie = "authToken="+authToken
      }

    }
  }


  render(){

    const { handleClose } = this.props
    const { username, password, username_status, password_status } = this.state

    return(
      <div  className="logger__form">
        <div className="logger__field">
          <label htmlFor="username" className="logger__label">Username</label>
          <input type="text" name="username" style={{"border-color" : username_status ? 'green' : 'darkred'}} value={username} className="logger__input" onChange={this.handleChange}/>
        </div>
        <div className="logger__field">
          <label htmlFor="password" className="logger__label">Password</label>
          <input type="password" name="password" style={{"border-color" : password_status ? 'green' : 'darkred'}} value={password} className="logger__input" onChange={this.handleChange}/>
        </div>
        <div className="logger__button__container">
          <button type="button" className="logger__button" onClick={handleClose}>Annuler</button>
          <button type="submit" className="logger__button" onClick={this.handleSubmit}>Connexion</button>
        </div>
      </div>
    );
  }
}

export default Logger;