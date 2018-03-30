/**
 * ИСПОЛЬЗОВАНИЕ

 * Props:
 * mode: по умолчанию white, можно задать dark
 * text: текст кнокпи
 * blockClasses: дополниельные классы для компонента
 * onClick: func по нажатию

 * Пример:
    <Button
        mode="dark"
        text="Send"
        blockClasses="classes"
        onClick={function}
    />
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends Component {

    static propTypes = {
        blockClasses: PropTypes.string,
        mode: PropTypes.string,
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        blockClasses: '',
        mode: 'light'
    };

    render() {
        let blockClasses = this.props.mode === 'dark' ? 'button--dark' : 'button--light';
        blockClasses += ' button ' + this.props.blockClasses;

        return (
            <div
                className={blockClasses}
                onClick={this.props.onClick}
            >
                {this.props.text}
            </div>
        )
    }

}
