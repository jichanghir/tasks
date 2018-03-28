import { combineReducers } from 'redux';

import tasks from './tasks';
import tableSettings from './tableSettings';

export default combineReducers({
    tasks,
    tableSettings
});


