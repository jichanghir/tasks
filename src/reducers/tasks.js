const defaultState = {
    tasks: [],
    showedTasks: [],
    currentPage: 1,
    tasksLimit: 25,
    filter: '',
    lists: []
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
            const filter = action.payload.filter || state.filter;

            const showedTasks = state.tasks.filter((task) =>
                task.name.toLowerCase().includes(filter.toLowerCase()) ||
                task.offer.toLowerCase().includes(filter.toLowerCase()) ||
                String(task['real-size']).toLowerCase().includes(filter.toLowerCase()) ||
                String(task['blog-size']).toLowerCase().includes(filter.toLowerCase()) ||
                String(task['count-of-waves']).toLowerCase().includes(filter.toLowerCase()) ||
                String(task['count-of-IPs']).toLowerCase().includes(filter.toLowerCase()) ||
                (task['blog-lists'] && task['blog-lists']
                    .some((list) =>
                        list.name.toLowerCase().includes(filter.toLowerCase()) ||
                        list.size.toLowerCase().includes(filter.toLowerCase())
                    )
                ) ||
                (task['real-lists'] && task['real-lists']
                    .some((list) =>
                        list.name.toLowerCase().includes(filter.toLowerCase()) ||
                        list.size.toLowerCase().includes(filter.toLowerCase())
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

        case 'SET_LISTS' : {
            return {
                ...state,
                lists: action.payload.data
            }
        }

        case 'ADD_LIST' : {
            const newLists = action.payload.data;
            const keys = Object.keys(newLists);

            let tasks = state.tasks.map((task, index) => {

                if (keys.includes(task.name)) {
                    return newLists[task.name]
                }

                return task;
            });

            return {
                ...state,
                tasks
            }
        }

        case 'REMOVE_LIST' : {
            const newLists = action.payload.data;
            const keys = Object.keys(newLists);

            let tasks = state.tasks.map((task, index) => {

                if (keys.includes(task.name)) {
                    return newLists[task.name]
                }

                return task;
            });

            return {
                ...state,
                tasks
            }
        }

        default:
            return state;
    }
}
