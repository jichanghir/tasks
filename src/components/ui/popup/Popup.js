import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './c-popup.css';

export default class Popup extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {}
    // };

    static propTypes = {
        content: PropTypes.node,
        onHide: PropTypes.func.isRequired
    };
    // static defaultProps = {};

    // componentWillReceiveProps(nextProps) {};
    // shouldComponentUpdate(nextProps, nextState) {};
    // componentWillMount() {};
    // componentWillUpdate(nextProps, nextState) {};
    render() {
        return (
            <div
                className={`c-popup ${this.props.content ? 'showed' : 'hidden'}`}
            >
                <div
                    className="c-popup__background"
                    onClick={this.props.onHide}
                >
                    &nbsp;
                </div>
                <div className="c-popup__content">
                    {this.props.content}
                </div>
            </div>
        )
    };
    // componentDidMount() {};
    // componentDidUpdate(prevProps, prevState) {};
    // componentWillUnmount() {};
    // componentDidCatch(error, info) {};

}
