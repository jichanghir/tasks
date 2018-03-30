import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import Select from 'components/ui/select/Select';
// import Popup from 'components/ui/popup/Popup';
import AddList from 'components/add_list/AddList';
import RemoveList from 'components/remove_list/RemoveList';

import { getTasks } from 'actions/tasks';
// import { setPopupContent } from 'actions/ui';

import './c-table.css';
import './c-list-row.css';

class Table extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {}
    // };

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
                {
                this.props.tasks.map((task) => {
                    const blogActualSizeSumm = task['blog-lists']
                    ? task['blog-lists'].reduce((summ, list) => {
                        return summ + list.actual_size;
                    }, 0)
                    : null;

                    const realActualSizeSumm = task['real-lists']
                    ? task['real-lists'].reduce((summ, list) => {
                        return summ + list.actual_size;
                    }, 0)
                    : null;

                    return (
                        <div
                            key={task['name']}
                            className="c-table__row"
                        >
                            <div className="c-table__cell c-table__cell--pool">{task['name']}</div>
                            <div className="c-table__cell c-table__cell--offer">{task['offer']}</div>
                            <div className="c-table__cell c-table__cell--blog-lists">
                                {task['blog-lists'] && task['blog-lists'].map((list) =>
                                    <div
                                        key={`blist-${list.name}`}
                                        className="c-list-row"
                                    >
                                        <div
                                            className={`c-list-row__name ${list.state_class === 'e-list-empty' ? 'empty-list' : ''} ${list.state_class === 'e-list-insufficient' ? 'empty-insufficient' : ''}`}
                                        >
                                            {`${list.name}:${list.size}${list.actual_size ? `(${list.actual_size})` : ''}`}
                                        </div>
                                        <RemoveList
                                            group="blog"
                                            task_name={task['name']}
                                            alias={list.name}
                                        />
                                    </div>
                                )}
                                <AddList
                                    group="blog"
                                    task_name={task['name']}
                                />
                            </div>
                            <div className="c-table__cell c-table__cell--real-lists">
                                {task['real-lists'] && task['real-lists'].map((list) =>
                                    <div
                                        key={`rlist-${list.name}`}
                                        className="c-list-row"
                                    >
                                        <div
                                            className={`c-list-row__name ` +
                                            `${list.state_class === 'e-list-empty' ? 'empty-list' : ''} ` +
                                            `${list.state_class === 'e-list-insufficient' ? 'insufficient-list' : ''}`
                                            }
                                        >
                                            {`${list.name}:${list.size}${list.actual_size ? `(${list.actual_size})` : ''}`}
                                        </div>
                                        <RemoveList
                                            group="real"
                                            task_name={task['name']}
                                            alias={list.name}
                                        />
                                    </div>
                                )}
                                <AddList
                                    group="real"
                                    task_name={task['name']}
                                />
                            </div>
                            <div className="c-table__cell c-table__cell--b-amount">
                                <div>{task['blog-size']}</div>
                                {blogActualSizeSumm && <div>({blogActualSizeSumm})</div>}
                            </div>
                            <div className="c-table__cell c-table__cell--r-amount">
                                <div>{task['real-size']}</div>
                                {realActualSizeSumm && <div>({realActualSizeSumm})</div>}
                            </div>
                            <div className="c-table__cell c-table__cell--w-count">{task['count-of-waves']}</div>
                            <div className="c-table__cell c-table__cell--ip-count">{task['count-of-IPs']}</div>
                        </div>
                    )
                })
            }
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
        tasks: state.tasks.showedTasks.slice(
            state.tasks.tasksLimit * state.tasks.currentPage - state.tasks.tasksLimit,
            state.tasks.tasksLimit * state.tasks.currentPage
        ),
        lists: state.lists
    }),
    dispatch => ({
        getTasks: (data) => {
            dispatch(getTasks(data))
        },
        // setPopupContent: (data) => {
        //     dispatch(setPopupContent(data))
        // }
    })
)(Table);
