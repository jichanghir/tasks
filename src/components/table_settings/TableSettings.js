import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputText from 'components/ui/input_text/InputText';

import { setFilter } from 'actions/tableSettings';

import './c-table-settings.css';

class TableSettings extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {}
    // };

    static propTypes = {
        filter: PropTypes.string.isRequired,
        setFilter: PropTypes.func.isRequired
    };
    static defaultProps = {};

    // componentWillReceiveProps(nextProps) {};
    // shouldComponentUpdate(nextProps, nextState) {};
    // componentWillMount() {};
    // componentWillUpdate(nextProps, nextState) {};
    render() {
        return (
            <div className="c-table-settings">
                <InputText
                    value={this.props.filter}
                    onChange={(e) => this.props.setFilter.call(null, e.target.value)}
                    searchIcon={true}
                />
            </div>
        );
    };
    // componentDidUpdate(prevProps, prevState) {};
    // componentWillUnmount() {};
    // componentDidCatch(error, info) {};

}

export default connect(
    state => ({
        filter: state.tableSettings.filter
    }),
    dispatch => ({
        setFilter: (data) => {
            dispatch(setFilter(data))
        }
    })
)(TableSettings);
