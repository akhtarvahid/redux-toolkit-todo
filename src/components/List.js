import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function List({ todos }) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                {todos.map(todo =>
                    <div key={todo.id} className='todo-row'>
                        <img src={todo.avatar} alt='avatar' />
                        <div>
                            <h3>{todo.name}</h3>
                            <div>{todo.company}</div>
                        </div>
                        <div>
                            <button onClick={() => navigate(`/todo-list/${todo.id}`)}>View</button>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
