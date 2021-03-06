import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTasks } from 'actions/tasks';

import './c-table.css';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    };

    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        getTasks: PropTypes.func.isRequired
    };
    static defaultProps = {};

    // componentWillReceiveProps(nextProps) {};
    // shouldComponentUpdate(nextProps, nextState) {};
    // componentWillMount() {};
    // componentWillUpdate(nextProps, nextState) {};
    render() {
        return (
            <div className="c-table">
                <div className="c-table__header c-table__row">
                    <div className="c-table__cell c-table__cell--pool">Pool</div>
                    <div className="c-table__cell c-table__cell--offer">Offer</div>
                    <div className="c-table__cell c-table__cell--blog-lists">Blog Lists</div>
                    <div className="c-table__cell c-table__cell--real-lists">Real Lists</div>
                    <div className="c-table__cell c-table__cell--b-amount">B.Amount</div>
                    <div className="c-table__cell c-table__cell--r-amount">R.Amount</div>
                    <div className="c-table__cell c-table__cell--w-count">W.Count</div>
                    <div className="c-table__cell c-table__cell--ip-count">IP.Count</div>
                </div>
                {this.props.tasks.map((task) =>
                    <div
                        key={task['name']}
                        className="c-table__row"
                    >
                        <div className="c-table__cell c-table__cell--pool">{task['name']}</div>
                        <div className="c-table__cell c-table__cell--offer">{task['offer']}</div>
                        <div className="c-table__cell c-table__cell--blog-lists">
                            {task['blog-lists'].map((list) =>
                                <div key={`blist-${list.name}`}>
                                    {`${list.name}:${list.size}(${list.actual_size})`}
                                </div>
                            )}
                        </div>
                        <div className="c-table__cell c-table__cell--real-lists">
                            {task['real-lists'].map((list) =>
                                <div key={`rlist-${list.name}`}>
                                    {`${list.name}:${list.size}(${list.actual_size})`}
                                </div>
                            )}
                        </div>
                        <div className="c-table__cell c-table__cell--b-amount">{task['blog-size']}</div>
                        <div className="c-table__cell c-table__cell--r-amount">{task['real-size']}</div>
                        <div className="c-table__cell c-table__cell--w-count">{task['count-of-waves']}</div>
                        <div className="c-table__cell c-table__cell--ip-count">{task['count-of-IPs']}</div>
                    </div>
                )}
            </div>
        );
    };
    componentDidMount() {
        this.props.getTasks();
    };
    // componentDidUpdate(prevProps, prevState) {};
    // componentWillUnmount() {};
    // componentDidCatch(error, info) {};

}

export default connect(
    state => ({
        // Фильтруем task по всем полям
        tasks: state.tasks.filter((task) =>
            task.name.toLowerCase().includes(state.tableSettings.filter.toLowerCase()) ||
            task.offer.toLowerCase().includes(state.tableSettings.filter.toLowerCase()) ||
            String(task['real-size']).toLowerCase().includes(state.tableSettings.filter.toLowerCase()) ||
            String(task['blog-size']).toLowerCase().includes(state.tableSettings.filter.toLowerCase()) ||
            String(task['count-of-waves']).toLowerCase().includes(state.tableSettings.filter.toLowerCase()) ||
            String(task['count-of-IPs']).toLowerCase().includes(state.tableSettings.filter.toLowerCase()) ||
            task['blog-lists']
                .some((list) =>
                    list.name.toLowerCase().includes(state.tableSettings.filter.toLowerCase()) ||
                    list.size.toLowerCase().includes(state.tableSettings.filter.toLowerCase())
                ) ||
            task['real-lists']
                .some((list) =>
                    list.name.toLowerCase().includes(state.tableSettings.filter.toLowerCase()) ||
                    list.size.toLowerCase().includes(state.tableSettings.filter.toLowerCase())
                )
        )
    }),
    dispatch => ({
        getTasks: (data) => {
            dispatch(getTasks(data))
        }
    })
)(Table);
