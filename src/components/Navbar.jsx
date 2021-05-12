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
            showInfo : false
        }
        this.openLogger = this.openLogger.bind(this)
        this.closeLogger = this.closeLogger.bind(this)
        this.openInfo = this.openInfo.bind(this)
        this.closeInfo = this.closeInfo.bind(this)
        this.togglePause = this.togglePause.bind(this)
    }

    /*getApiRequest() {

        return {
            id:     `api.sprint.${ board }`,
            params: {
                board: board
            }
        };
    }

    onApiData(sprint) {
        console.log(sprint)
        this.setState({
            sprint: sprint
        });
    }*/

    openLogger() {
        if(!Dashboard.paused()){Dashboard.paused()}
        this.setState({showLogger : true})
    }

    closeLogger(){
        if(Dashboard.paused()){Dashboard.restart()}
        this.setState({showLogger : false})}

    openInfo(){
        if(!Dashboard.paused()){Dashboard.paused()}
        this.setState({showInfo : true})}

    closeInfo(){
        if(Dashboard.paused()){Dashboard.restart()}
        this.setState({showInfo : false})}

    togglePause(){
        Dashboard.paused() ? Dashboard.restart() : Dashboard.pause();
        this.forceUpdate();
    }

    render() {

        const { showLogger, showInfo } = this.state;

        return (
            <div className="navbar__container">
                {Dashboard.paused() ? <Play onClick={this.togglePause}/> : <Pause onClick={this.togglePause}/>}
                <Forward onClick={Dashboard.nextDashboard}/>
                <label className="navbar__msg">
                    Le message est ici
                </label>
                <Login onClick={this.openLogger}/>
                <Modal show={showLogger} handleClose={this.closeLogger}>
                    <Logger/>
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
