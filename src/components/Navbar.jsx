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
            <div className="container">
                <div className="element"><Forward/></div>
                <div className="element"><Pause/></div>
                <div className="element"><Play/></div>
                <div className="element"><Login/></div>
                <div className="element"><Logout/></div>
                
            </div>
        );
    }
}

Navbar.displayName = 'Navbar';

reactMixin(Navbar.prototype, ListenerMixin);
reactMixin(Navbar.prototype, Mozaik.Mixin.ApiConsumer);

export default Navbar;
