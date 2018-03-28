import React, { Component } from 'react';

import Table from 'components/table/Table';
import TableSettings from 'components/table_settings/TableSettings';

import 'stylesheets/main.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TableSettings/>
                <Table />
            </div>
        );
    };
}

export default App;
