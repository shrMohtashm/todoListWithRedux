import { shallowEqual, useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'
import { selectFilteredTodoIds, selectTodoIds, selectTodos } from './todosSlice';
const TodoList = () => {

    //const todos=useSelector(selectTodos)
    const todoIds=useSelector(selectFilteredTodoIds,shallowEqual)

    const renderedListItems =todoIds.map((id) => {
        return <TodoListItem key={id} id={id} />
    }) 

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
