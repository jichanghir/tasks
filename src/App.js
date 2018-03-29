import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from 'components/table/Table';
import TableSettings from 'components/table_settings/TableSettings';
import Popup from 'components/ui/popup/Popup';

import { setPopupContent } from 'actions/ui';

import 'stylesheets/main.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TableSettings/>
                <Table />
                <Popup
                    content={this.props.popupContent}
                    onHide={this.props.hidePopup}
                />
            </div>
        );
    };
}

export default connect(
    state => ({
        popupContent: state.ui.popupContent
    }),
    dispatch => ({
        hidePopup: () => {
            dispatch(setPopupContent(null))
        }
    })
)(App);
