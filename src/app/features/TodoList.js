import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
   
    return (
        <ul>
            {todos.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
    )
}

export default TodoList
