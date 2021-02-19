import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames                      from 'classnames'
import d3                              from 'd3/d3'
import moment                          from 'moment'
import timezone                        from 'moment-timezone'


class Sprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sprint : null
        }
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
            <div className={cssClasses}>
                <div className="widget__header">
                    <span>
                        <span className="widget__header__subject">Sprint</span>
                    </span>
                    <span className="widget__header__count">
                        3
                    </span>
                    <i className="fa fa-bug" />
                </div>
                <div className="widget__body">
                    <div>
                        Hello
                    </div>
                </div>
            </div>
        );
    }
}

Sprint.displayName = 'Sprint';

/*Clock.propTypes = {
    title:    PropTypes.string,
    info:     PropTypes.string,
    timezone: PropTypes.string,
    sunRise:  PropTypes.string.isRequired,
    sunSet:   PropTypes.string.isRequired
};*/




export default Sprint;
