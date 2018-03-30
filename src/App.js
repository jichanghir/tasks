import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from 'components/table/Table';
import TableSettings from 'components/table_settings/TableSettings';
import Message from 'components/ui/message/Message';

// import Popup from 'components/ui/popup/Popup';

// import { setError } from 'actions/ui';

import 'stylesheets/main.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TableSettings/>
                <Table/>
                {/*<Popup
                    content={this.props.popupContent}
                    onHide={this.props.hidePopup}
                />*/}
                <Message
                    message={this.props.messageText}
                    type={this.props.messageType}
                />
            </div>
        );
    };
}

export default connect(
    state => ({
        // popupContent: state.popup.content
        messageText: state.ui.messageText,
        messageType: state.ui.messageType
    }),
    dispatch => ({
        // hidePopup: () => {
        //     dispatch(setPopupContent(null))
        // }
    })
)(App);
