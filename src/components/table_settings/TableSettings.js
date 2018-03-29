import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputText from 'components/ui/input_text/InputText';
import Select from 'components/ui/select/Select';
import Pagination from 'components/ui/pagination/Pagination';

import { setFilter, setTaskLimit, setCurrentPage } from 'actions/tasks';

import './c-table-settings.css';

class TableSettings extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {}
    // };

    static propTypes = {
        filter: PropTypes.string.isRequired,
        tasksLimit: PropTypes.number.isRequired,
        pagesCount: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
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
                <div className="c-table-settings__left">
                    <InputText
                        value={this.props.filter}
                        onChange={(e) => this.props.setFilter.call(null, e.target.value)}
                        searchIcon={true}
                        blockClasses="c-table-settings__filter"
                        placeholder="filter"
                    />

                    <Select
                        options={[
                            {value:'10', label:'10'},
                            {value:'25', label:'25'},
                            {value:'50', label:'50'},
                            {value:'100', label:'100'}
                        ]}
                        value={this.props.tasksLimit}
                        onChange={this.props.setTaskLimit}
                        blockClasses="c-table-settings__limit"
                    />
                </div>

                <div className="c-table-settings__pagination pagination">
                    <Pagination
                        pagesCount={this.props.pagesCount}
                        currentPage={this.props.currentPage}
                        setCurrentPage={this.props.setCurrentPage}
                    />
                </div>
            </div>
        );
    };
    // componentDidUpdate(prevProps, prevState) {};
    // componentWillUnmount() {};
    // componentDidCatch(error, info) {};

}

export default connect(
    state => ({
        filter: state.tasks.filter,
        tasksLimit: state.tasks.tasksLimit,
        pagesCount: Math.ceil(state.tasks.showedTasks.length / state.tasks.tasksLimit),
        currentPage: state.tasks.currentPage
    }),
    dispatch => ({
        setFilter: (data) => {
            dispatch(setFilter(data))
        },
        setTaskLimit: (data) => {
            dispatch(setTaskLimit(data))
        },
        setCurrentPage: (data) => {
            dispatch(setCurrentPage(data))
        }
    })
)(TableSettings);
