import React, { Component, PropTypes } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';
/*import classNames                      from 'classnames'
import d3                              from 'd3/d3'
import moment                          from 'moment'
import timezone                        from 'moment-timezone'*/
import { Forward, Pause, Play, Login, Logout }        from './Shapes.jsx';
import Logger from './Logger.jsx'
import Modal from './Modal.jsx'
const { Dashboard } = Mozaik.Store;


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogger : false,
            showInfo : false,
            message : null
        }
        this.openLogger = this.openLogger.bind(this)
        this.closeLogger = this.closeLogger.bind(this)
        this.openInfo = this.openInfo.bind(this)
        this.closeInfo = this.closeInfo.bind(this)
        this.togglePause = this.togglePause.bind(this)
        this.logout = this.logout.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    getApiRequest() {

        cosnt { id } = this.props

        return {
            id:     `navbar.message`,
            params: {
                id: id
            }
        };
    }

    onApiData(data) {
        console.log(data.msg)
        this.setState({
            message: data.msg
        });
    }

    handleChange(e) {
        this.setState({
            message : e.target.value
        })

        const { message } = this.state
        const { id } = this.props

        fetch('/message', {
            method : 'POST',
            headers : {
            'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                id : id,
                message : message
            })
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

        const { showLogger, showInfo, message } = this.state;

        return (
            <div className="navbar__container">
                {Dashboard.paused() ? <Play onClick={this.togglePause}/> : <Pause onClick={this.togglePause}/>}
                <Forward onClick={Dashboard.nextDashboard}/>
                {Dashboard.connected() ? 
                <input value={message} onChange={this.handleChange} className="navbar__msg"/> : 
                <label value={message} className="navbar__msg">
                </label>}
                {Dashboard.connected() ? <Logout onClick={this.logout}/> : <Login  onClick={this.openLogger}/>}
                <Modal show={showLogger} handleClose={this.closeLogger}>
                    <Logger login={Dashboard.login} handleClose={this.closeLogger}/>
                </Modal>
                <div className="navbar__version" onClick={this.openInfo}>v 1.0.0</div>
                <Modal show={showInfo} handleClose={this.closeInfo}>
                </Modal>
            </div>
        );
    }
}

Navbar.displayName = 'Navbar';

reactMixin(Navbar.prototype, ListenerMixin);
reactMixin(Navbar.prototype, Mozaik.Mixin.ApiConsumer);

export default Navbar;
