import React, { Component, PropTypes } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';
/*import classNames                      from 'classnames'
import d3                              from 'd3/d3'
import moment                          from 'moment'
import timezone                        from 'moment-timezone'*/
import { Forward, Pause, Play, Login, Logout }        from './Shapes.jsx';
const { Dashboard } = Mozaik.Store;


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.openLogger = this.openLogger.bind(this)
        this.openInfo = this.openInfo.bind(this)
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
        alert('hello world')
    }

    openInfo(){
        alert('info')
    }

    render() {

        return (
            <div className="navbar__container">
                <Pause/>
                <Forward onClick={Dashboard.nextDashboard}/>
                <label className="navbar__msg">
                    Le message est ici
                </label>
                <Login onClick={this.openLogger}/>
                <div className="navbar__version" onClick={this.openInfo}>v 1.0.0</div>
            </div>
        );
    }
}

Navbar.displayName = 'Navbar';

reactMixin(Navbar.prototype, ListenerMixin);
reactMixin(Navbar.prototype, Mozaik.Mixin.ApiConsumer);

export default Navbar;
