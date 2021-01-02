import React, { useState } from 'react';
import Input from './components/Input';
import Items from './components/Items';

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const onAddTodo = (_value: string) => {
    setTodoList([...todoList, _value]);
  };
  return (
    <div className="App">
      <Input onKeyDown={onAddTodo} />
      <Items itemList={todoList} />
    </div>
  );
}

export default App;
