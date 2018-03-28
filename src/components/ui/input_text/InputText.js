/**
 * ИСПОЛЬЗОВАНИЕ

 * Props:
 * value: значение
 * onChange: функция выполнения
 * errorText: текст ошибки
 * blockClasses: дополниельные классы для компонента
 * disabled: boolean,
 * placeholder: String
 * type: String
 * searchIcon: Boolean

 * Пример:
    <InputText
        value={verification_code}
        onChange={this.handleChangeVCode}
        errorText={verification_code_error}
    />
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './c-input-text.css';

export default class InputText extends Component {

    static propTypes = {
        onChange: PropTypes.func,
        blockClasses: PropTypes.string,
        errorText: PropTypes.string,
        disabled: PropTypes.bool,
        placeholder: PropTypes.string,
        type: PropTypes.string,
        searchIcon: PropTypes.bool
    };

    static defaultProps = {
        blockClasses: '',
        errorText: '',
        value: '',
        placeholder: '',
        disabled: false,
        searchIcon: false
    };

    render() {
        let { value, onChange, errorText, disabled, placeholder, onFocus, onBlur } = this.props;

        let blockClasses = this.props.blockClasses ? `c-input-text ${this.props.blockClasses}` : 'c-input-text';
        this.props.searchIcon && (blockClasses = `${blockClasses} c-input-text--search`);

        let error = () => {

            if (errorText) {
                return (
                    <div className="c-input-text__errortext">
                        {errorText}
                    </div>
                );
            }
            else return false;

        }

        let input = () => {
            if (onChange) {
                return (
                    <input
                        type={this.props.type || 'text'}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                );
            }
            else {
                return (
                    <input
                        type={this.props.type || 'text'}
                        value={value}
                        placeholder={placeholder}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        readOnly
                        disabled={disabled}
                    />
                );
            }
        };

        return (
            <div className={blockClasses}>
                {input()}
                {error()}
            </div>
        );
    };

}
