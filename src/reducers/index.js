import { combineReducers } from 'redux';

import tasks from './tasks';
import lists from './lists';
import ui from './ui';

export default combineReducers({
    tasks,
    lists,
    ui
});


