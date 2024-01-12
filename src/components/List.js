import React from 'react'

export default function List({ todos }) {
    return (
        <div>
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>{todo.name}: {todo.company}</li>
                )}
            </ul>
        </div>
    )
}
