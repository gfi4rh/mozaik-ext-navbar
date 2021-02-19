import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Mozaik                          from 'mozaik/browser';
/*import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';
import classNames                      from 'classnames'
import d3                              from 'd3/d3'
import moment                          from 'moment'
import timezone                        from 'moment-timezone'*/


class Sprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sprint : null
        }
        
    }

    componentWillMount() {
        const displayName = this.constructor.displayName || 'Unknown';

        if (!this.getApiRequest) {
            console.warn(`Seems you're trying to use 'ApiConsumerMixin' without implementing 'getApiRequest()', see '${displayName}' component`);
            return;
        }

        this.apiRequest = this.getApiRequest();
        if (!this.apiRequest.id) {
            console.error(`'getApiRequest()' MUST return an object with an 'id' property, see '${displayName}' component`);
            return;
        }

        //this.listenTo(Mozaik.Store.Api, this.onAllApiData);
    }

    onAllApiData(data) {
        if (data.id === this.apiRequest.id) {
            this.onApiData(data.body);
        }
    }

    componentDidMount() {
        if (!this.apiRequest || !this.apiRequest.id) {
            return;
        }

        Mozaik.Actions.Api.get(this.apiRequest.id, this.apiRequest.params || {});
    }

    getApiRequest() {
        let { board } = this.props;

        return {
            id:     `api.sprint.${ board }`,
            params: {
                board: board
            }
        };
    }

    onApiData(sprint) {
        this.setState({
            sprint: sprint
        });
    }

    render() {
        return (
            <div>
                <div className="widget__header">
                    <span>
                        <span className="widget__header__subject">{this.props.title}</span>
                    </span>
                    <span className="widget__header__count">
                        
                    </span>
                    <i className="fa fa-bug" />
                </div>
                <div className="widget__body">
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

Sprint.displayName = 'Sprint';

Sprint.propTypes = {
    board:  PropTypes.number.isRequired
};




export default Sprint;
