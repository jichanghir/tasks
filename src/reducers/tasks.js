const defaultState = {
    tasks: [],
    showedTasks: [],
    currentPage: 1,
    // pagesCount: 1,
    tasksLimit: 25,
    filter: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'SET_TASKS' : {
            return {
                ...state,
                tasks: action.payload.tasks,
                showedTasks: action.payload.tasks,
            };
        }

        case 'FILTER_TASKS' : {
            const showedTasks = state.tasks.filter((task) =>
                task.name.toLowerCase().includes(action.payload.filter.toLowerCase()) ||
                task.offer.toLowerCase().includes(action.payload.filter.toLowerCase()) ||
                String(task['real-size']).toLowerCase().includes(action.payload.filter.toLowerCase()) ||
                String(task['blog-size']).toLowerCase().includes(action.payload.filter.toLowerCase()) ||
                String(task['count-of-waves']).toLowerCase().includes(action.payload.filter.toLowerCase()) ||
                String(task['count-of-IPs']).toLowerCase().includes(action.payload.filter.toLowerCase()) ||
                (task['blog-lists'] && task['blog-lists']
                    .some((list) =>
                        list.name.toLowerCase().includes(action.payload.filter.toLowerCase()) ||
                        list.size.toLowerCase().includes(action.payload.filter.toLowerCase())
                    )
                ) ||
                (task['real-lists'] && task['real-lists']
                    .some((list) =>
                        list.name.toLowerCase().includes(action.payload.filter.toLowerCase()) ||
                        list.size.toLowerCase().includes(action.payload.filter.toLowerCase())
                    )
                )
            );

            return {
                ...state,
                showedTasks
            }
        }

        case 'SET_FILTER' :
            return {
                ...state,
                filter: action.payload.data
            }

        case 'SET_TASKS_LIMIT' : {
            return {
                ...state,
                tasksLimit: action.payload.data
            }
        }

        case 'SET_CURRENT_PAGE' : {
            return {
                ...state,
                currentPage: action.payload.data,
            }
        }

        default:
            return state;
    }
}
