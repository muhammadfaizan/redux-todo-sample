import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo-action'
import { VisibilityFilters } from '../actions/action-types'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case SHOW_ALL:
        default:
         return todos
    }
}
const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilters)
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
