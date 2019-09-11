import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { getTodos } from '../../store/actions';

class TodoList extends Component {
    
    componentDidMount(){
        this.props.getTodos();
    }
    
    render(){
        const { filteredTodos } = this.props;

        const completedTodosList = filteredTodos.filter(todo => todo.isCompleted)
        const notCompletedTodosList = filteredTodos.filter(todo => !todo.isCompleted)

        const filteredTodoList = (filteredTodos.map(el => <Todo key={el._id} todo={el}/>))
        
        return (
            <div>
                { filteredTodos.length ? filteredTodoList : <div style={{textAlign: 'center', fontWeight: 'bold'}}> No Todos </div> }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filteredTodos: state.todos.filteredTodos
})

export default connect(mapStateToProps, { getTodos })(TodoList);