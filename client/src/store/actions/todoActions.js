import { ADD_TODO, 
    SET_TODOS, 
    LOAD_TODOS, 
    DELETE_TODO, 
    COMPLETE_TODO, 
    UPDATE_FILTERED_TODOS 
} from '../actionTypes';
import api from '../../services/api';
import Axios from 'axios';

export const createTodo = todo => ({
    type: ADD_TODO,
    payload: todo
});

export const setTodos = todo => ({
    type: SET_TODOS,
    payload: todo
});

export const removeTodo = todoId => ({
    type: DELETE_TODO,
    payload: todoId
});

export const addTodo = newTodo => async dispatch => {
    try{
        const todo = await api.call('post', 'todos/add', newTodo);
        dispatch(createTodo(todo));
    } catch (error) {
        const err = error.response.data;
        console.log(err);
    }
}

export const getTodos = () => async dispatch => {
    try{
        const todos = await api.call('get', 'todos');
        dispatch(setTodos(todos));
    } catch (error) {
        const err = error.response.data;
        console.log(err);
    }
}

export const deleteTodo = data => async dispatch => {
    try {
        const { id } = await api.call('delete', `todos/${data}`);
        dispatch(removeTodo(id));
    } catch (error) {
        const err = error.response.data;
        console.log(err);
    }
}

export const updateFilteredTodos = data => dispatch =>{
    dispatch({
        type: UPDATE_FILTERED_TODOS,
        payload: data
    })
}

