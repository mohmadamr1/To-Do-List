import {useRef, useState}from 'react';

const Todolist = () => {
    const [todos, setTodos] = useState([])

    const inputRef = useRef()

    const handleAddTodo = () => {
        const text = inputRef.current.value;
        setTodos([...todos,text])
        inputRef.current.valuev = "";
    }
    return (
        <div className='todolist'>
            <h2>To Do List</h2>
            <div className='to-do-container'>
             <ul>
            {todos.map((item) => {
                return <li>{item}</li>
            })}
            </ul>
            <input ref={inputRef} placeholder='Enter item...'/>
            <button onClick={handleAddTodo}>add</button>
            </div>
        </div>
    );
}

export default Todolist;
