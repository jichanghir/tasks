import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './c-pagination.css';

export default class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    };

    static propTypes = {
        pagesCount: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
        setCurrentPage: PropTypes.func.isRequired
    };
    static defaultProps = {};

    // componentWillReceiveProps(nextProps) {};
    // shouldComponentUpdate(nextProps, nextState) {};
    // componentWillMount() {};
    // componentWillUpdate(nextProps, nextState) {};
    render() {
        let result = [];
        for (let i = 0; i < this.props.pagesCount; i++) {
            result.push(
                <div
                    key={`pagination-${i}`}
                    className={`pagination__page ${i + 1 === this.props.currentPage ? 'active' : ''}`}
                    onClick={this.props.setCurrentPage.bind(null, i + 1)}
                >
                    {i + 1}
                </div>
            )
        }

        return (
            <div className="pagination">
                {result}
            </div>
        )
    };
    // componentDidMount() {};
    // componentDidUpdate(prevProps, prevState) {};
    // componentWillUnmount() {};
    // componentDidCatch(error, info) {};

}
