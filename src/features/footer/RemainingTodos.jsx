import { useSelector } from "react-redux"
import { selectTodos } from "../todos/todosSlice"

const RemainingTodos = () => {
    const todos=useSelector(selectTodos)
    const count=Object.values(todos).filter(todo=> !todo.completed).length
    // const suffix = count === 1 ? '' : 's'

    return (
        <div className="todo-count">
            <h5>Remaining Todos</h5>
            <strong>{count}</strong> itemleft
        </div>
    )
}

export default RemainingTodos