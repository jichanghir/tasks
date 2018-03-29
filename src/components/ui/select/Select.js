/**
 * ИСПОЛЬЗОВАНИЕ

    ** Props:
    * onChange: функция по клику, обязательная,
        получает в качестве первого аргумента значения value,
        второго - параметр name
    * value: значение по умолчание value
    * blockClasses: дополниельные классы для компонента
    * name: параметр name
    * options: массив объектов, которые имеют два значения: value и label
    * disabledValue: значение которое передается в option disabled

    ** пример:
    options = [
        {value:'one', label:'one'},
        {value:'two', label:'two'},
        {value:'three', label:'something'}
    ]

 * Пример:
    <Select
        options={options}
        onChange={this.doSomething}
    />
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './c-select.css';

export default class Select extends Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        options: PropTypes.array,
        name: PropTypes.string,
        blockClasses: PropTypes.string,
        disabled: PropTypes.bool,
        disabledValue: PropTypes.string
    };

    static defaultProps = {
        blockClasses: '',
        name: '',
        disabled: false
    };

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        }
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        }, () => {
            this.props.onChange.call(null, this.state.value, this.props.name);
        });
    };

    componentWillReceiveProps(nextProps) {
        if (this.state.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    };

    render() {
        let { options, disabled } = this.props;
        let { value } = this.state;

        let blockClasses = this.props.blockClasses ? `c-select ${this.props.blockClasses}` : 'c-select';

        return (

            <select
                className={blockClasses}
                value={value}
                onChange={this.handleChange}
                disabled={disabled}
            >
                <option disabled={true} value={this.props.disabledValue || ''}>choose...</option>
                {
                    options.map((option) => {
                        return <option value={option.value} key={`select-key-${option.value}`}>{option.label}</option>
                    })
                }
            </select>

        );
    };

}
