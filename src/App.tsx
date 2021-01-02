import React, { useState } from 'react';
import Input from './components/Input';
import Items from './components/Items';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const onAddTodo = (_value: string) => {
    setTodoList([...todoList, _value]);
  };
  const onDeleteTodo = (_index: string) => {
    setTodoList([...todoList.filter(index => index !== _index)]);
  };
  return (
    <div className="App">
      <Input onKeyDown={onAddTodo} />
      <Items itemList={todoList} onDeleteItem={onDeleteTodo} />
    </div>
  );
}

export default App;
