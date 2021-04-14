import React, { Component, PropTypes } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';
/*import classNames                      from 'classnames'
import d3                              from 'd3/d3'
import moment                          from 'moment'
import timezone                        from 'moment-timezone'*/
import { Forward, Pause, Play, Login, Logout }        from './Shapes.jsx';


class Navbar extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            sprint : null
        }*/
        
    }

    /*getApiRequest() {
        let { board } = this.props;

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

    render() {

        return (
            <div className="navbar__container">
                <div className="navbar__svg"><Pause/></div>
                <div className="navbar__svg"><Forward/></div>
                <label className="navbar__msg">
                    Le message est ici
                </label>
                <div className="navbar__svg"><Login/></div>
                <div className="navbar__version">v 1.0.0</div>
            </div>
        );
    }
}

Navbar.displayName = 'Navbar';

reactMixin(Navbar.prototype, ListenerMixin);
reactMixin(Navbar.prototype, Mozaik.Mixin.ApiConsumer);

export default Navbar;
