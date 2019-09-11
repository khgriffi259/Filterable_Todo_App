import { ADD_TODO, 
    SET_TODOS, 
    LOAD_TODOS, 
    DELETE_TODO, 
    COMPLETE_TODO,
    UPDATE_FILTERED_TODOS 
} from '../actionTypes';

const initState = {
    todos: [],
    filteredTodos: [],
    loading: false
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                filteredTodos: [...state.filteredTodos, action.payload]
            }
        case SET_TODOS:
            return {
                ...state,
                loading: false,
                todos: action.payload,
                filteredTodos: action.payload
            }
        case LOAD_TODOS:
            return {
              ...state,
              loading: true
            }
        case DELETE_TODO:
            return {
               ...state,
               todos: state.todos.filter(item => item._id != action.payload),
               filteredTodos: state.filteredTodos.filter(item => item._id != action.payload)
            }
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                        if (todo._id === action.payload) {
                            return {
                                ...todo,
                                isComplete: !todo.isComplete
                            }
                        }
                    })
            }
            case UPDATE_FILTERED_TODOS:
            return {
               ...state,
               filteredTodos: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;