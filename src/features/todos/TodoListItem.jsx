import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as TimesSolid } from './times-solid.svg'
import { deleteTodo, toggleTodo } from './todosSlice'
import { useState } from 'react'


export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const TodoListItem = ({ id }) => {
    const dispatch =useDispatch()
    const todo=useSelector(state => state.todos.entities[id])
    const { text, completed, color } = todo
    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))


    function handleChangeColor(e){
        dispatch({
            type:'todos/changeColor',
            payload:{
                id : todo.id,
                color : e.target.value
            }
        })

    }
    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked = {completed}
                        onClick={()=> dispatch(toggleTodo(todo.id))}
                        

                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        defaultValue={color}
                        style={{ color }}
                        onChange={handleChangeColor}

                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button className="destroy" onClick={()=>dispatch(deleteTodo(todo.id))}>
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem
