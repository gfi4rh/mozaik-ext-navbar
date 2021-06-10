import React, { Component } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';
import { Forward, Pause, Play, Login, Logout }        from './Shapes.jsx';
import Logger from './Logger.jsx'
import Modal from './Modal.jsx'
import Info from './Info.jsx'
const { Dashboard } = Mozaik.Store;


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogger : false,
            showInfo : false,
            message : null,
            info : null
        }
        this.openLogger = this.openLogger.bind(this)
        this.closeLogger = this.closeLogger.bind(this)
        this.openInfo = this.openInfo.bind(this)
        this.closeInfo = this.closeInfo.bind(this)
        this.togglePause = this.togglePause.bind(this)
        this.logout = this.logout.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.readMessage = this.readMessage.bind(this)

        this.getInfo();
        this.readMessage()
        setInterval(this.readMessage, 5000);
    }

    readMessage(){

        if(!Dashboard.connected()){
            const { id } = this.props
            fetch(`/message/${id}`, {
                method : 'GET',
                headers : {
                'Content-Type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    message : json.msg
                })
            })
        }
    }

    getInfo(){
        fetch('/config',{
            method : 'GET',
            headers : {
            'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => this.setState({info : json.info}))
    }

    handleSubmit(e){
        if(e.key === "Enter"){
            const { message } = this.state
            const { id } = this.props
            fetch(`/writemessage/${id}`, {
                method : 'POST',
                headers : {
                'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    new_msg : message
                })
            })
        }
    }

    handleChange(e) {
        this.setState({
            message : e.target.value
        })
    }

    openLogger() {
        if(!Dashboard.paused()){Dashboard.pause()}
        this.forceUpdate();
        this.setState({showLogger : true})
    }

    closeLogger(){
        if(Dashboard.paused()){Dashboard.restart()}
        this.forceUpdate();
        this.setState({showLogger : false})}
        

    openInfo(){
        if(!Dashboard.paused()){Dashboard.pause()}
        this.forceUpdate();
        this.setState({showInfo : true})}

    closeInfo(){
        if(Dashboard.paused()){Dashboard.restart()}
        this.forceUpdate();
        this.setState({showInfo : false})}

    togglePause(){
        Dashboard.paused() ? Dashboard.restart() : Dashboard.pause();
        this.forceUpdate();
    }

    logout(){
        Dashboard.logout();
        this.forceUpdate();
    }


    render() {



        const { showLogger, showInfo, message, info } = this.state;


        return (
            <div className="navbar__container">
                {Dashboard.paused() ? <Play onClick={this.togglePause}/> : <Pause onClick={this.togglePause}/>}
                <Forward onClick={Dashboard.nextDashboard}/>
                {Dashboard.connected() ? 
                <input value={message} onChange={this.handleChange} onKeyPress={this.handleSubmit} className="navbar__msg"/> : 
                <label className="navbar__msg">
                    {message}
                </label>}
                {Dashboard.connected() ? <Logout onClick={this.logout}/> : <Login  onClick={this.openLogger}/>}
                <Modal show={showLogger} handleClose={this.closeLogger}>
                    <Logger login={Dashboard.login} handleClose={this.closeLogger}/>
                </Modal>
                <div className="navbar__version" onClick={this.openInfo}>{info && info.version}</div>
                <Modal show={showInfo} handleClose={this.closeInfo}>
                    {info && <Info info={info}/>}
                </Modal>
            </div>
        );
    }
}

Navbar.displayName = 'Navbar';

reactMixin(Navbar.prototype, ListenerMixin);
reactMixin(Navbar.prototype, Mozaik.Mixin.ApiConsumer);

export default Navbar;
