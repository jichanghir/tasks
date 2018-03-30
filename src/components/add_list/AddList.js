import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Select from 'components/ui/select/Select';

import { addList } from 'actions/tasks';

import './c-add-list.css';

class AddList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listToAdded: ''
        }
    };

    setListToAdded = (listToAdded) => {
        this.setState({
            listToAdded
        })
    };

    onAddList = () => {
        this.props.addList.call(null, this.state.listToAdded);

        this.setState({
            listToAdded: ''
        });
    };

    static propTypes = {
        group: PropTypes.string.isRequired,
        task_name: PropTypes.string.isRequired
    };
    static defaultProps = {};

    // componentWillReceiveProps(nextProps) {};
    // shouldComponentUpdate(nextProps, nextState) {};
    // componentWillMount() {};
    // componentWillUpdate(nextProps, nextState) {};
    render() {
        return (
            <div className="c-add-list">
                <Select
                    options={this.props.lists.map((list) => ({
                        value: list.name, label: list.name
                    }))}
                    value={this.state.listToAdded}
                    onChange={(value) => this.setListToAdded.call(null, value)}
                    blockClasses="c-add-list__select"
                />
                <div
                    className="c-add-list__btn"
                    onClick={this.onAddList}
                >
                    +
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
        addList: (alias) => {
            dispatch(addList({
                group: ownProps.group,
                task_name: ownProps.task_name,
                alias
            }))
        }
    })
)(AddList)
