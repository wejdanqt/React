import React, { useState } from 'react';
import './App.css';
import { any } from 'prop-types';



 function Todo({ todo ,  index , completeTodo , removeTodo }:any) {
  return (
    <div className='todo' style={{textDecoration: todo.isCopmleted ? 'line-through' : ''}}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)} >Complete</button>
        <button onClick={() => removeTodo(index)} >X</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}:any) {
  const [value, setValue] = useState ('');
  const handelSubmit = (e:any) =>  {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" className="input" value={value} onChange={ e => setValue(
        e.target.value
      ) } />

    </form>
  )

}



function App() {
  const [todos , setTodos]  = useState([
    {
      text: 'Learn react',
      isCopmleted: false
    },
    {
      text: 'Learn anguler',
      isCopmleted: false
    },
    {
      text: 'Learn spring',
      isCopmleted: false
    },
  ])





  const addTodo = (text:any) => {
    const newTodos = [...todos, { text:text , isCopmleted: false  }];
    setTodos(newTodos);
  };

  const completeTodo = (index:any) => {
    const newTodos = [...todos];
    newTodos[index].isCopmleted = true;
    setTodos(newTodos)
  }

  const removeTodo = (index:any) => {
    const newTodos = [...todos];
    newTodos.splice(index , 1);
    setTodos(newTodos);

  } 
  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo , index) => (
          <Todo key={index} index={index} todo={todo} completeTodo = {completeTodo} removeTodo = {removeTodo}/>
        )) }
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )

}

export default App;
