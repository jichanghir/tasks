import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './c-message.css';

export default class Message extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {}
    // };

    static propTypes = {
        message: PropTypes.string,
        type: PropTypes.string
    };
    static defaultProps = {
        type: 'success'
    };

    // componentWillReceiveProps(nextProps) {};
    // shouldComponentUpdate(nextProps, nextState) {};
    // componentWillMount() {};
    // componentWillUpdate(nextProps, nextState) {};
    render() {
        return (
            <div
                className={`c-message ${this.props.message ? 'showed' : 'hidden'} ${this.props.type}`}
            >
                <div className="c-message__content">
                    {this.props.message}
                </div>
            </div>
        )
    };
    // componentDidMount() {};
    // componentDidUpdate(prevProps, prevState) {};
    // componentWillUnmount() {};
    // componentDidCatch(error, info) {};

}
