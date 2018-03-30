import { combineReducers } from 'redux';

import tasks from './tasks';
import ui from './ui';
import popup from './popup';

export default combineReducers({
    tasks,
    ui,
    popup
});


