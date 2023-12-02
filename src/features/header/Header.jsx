
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "../todos/todosSlice";

export default function Header() {
    const [text,setText]=useState('')
    const dispatch =useDispatch()

    const handleChange=(e)=> setText(e.target.value)

    const addNewTodo = (e)=>{
        const trimmedText=text.trim()
        if(e.code ==='Enter' && trimmedText){
            dispatch(todoAdded(trimmedText))
            setText('')
         }
    }

    

    return (
        <header className="header">
            <input
                className="new-todo"
                placeholder='What needs to be done?'
                value={text}
                onChange={handleChange}
                onKeyDown={addNewTodo}
            />
        </header>
    )
}
