import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeList } from 'actions/tasks';

import './c-remove-list.css';

class AddList extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {}
    // };

    static propTypes = {
        group: PropTypes.string.isRequired,
        task_name: PropTypes.string.isRequired,
        alias: PropTypes.string.isRequired
    };
    static defaultProps = {};

    // componentWillReceiveProps(nextProps) {};
    // shouldComponentUpdate(nextProps, nextState) {};
    // componentWillMount() {};
    // componentWillUpdate(nextProps, nextState) {};
    render() {
        return (
            <div className="c-remove-list">
                <div
                    className="c-remove-list__btn"
                    onClick={this.props.removeList}
                >
                    -
                </div>
            </div>
        )
    };
    // componentDidMount() {};
    // componentDidUpdate(prevProps, prevState) {};
    // componentWillUnmount() {};
    // componentDidCatch(error, info) {};

}

export default connect(
    state => ({
        lists: state.tasks.lists
    }),
    (dispatch, ownProps) => ({
        removeList: (alias) => {
            dispatch(removeList({
                group: ownProps.group,
                task_name: ownProps.task_name,
                alias: ownProps.alias
            }))
        }
    })
)(AddList)
