import React from 'react';
import { useDispatch } from 'react-redux';
import Input from './components/Input';
import Items from './components/Items';
import { addTodo } from './modules/todo';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const onAddTodo = (_value: string) => {
    dispatch(addTodo(_value));
  };
  return (
    <div className="App">
      <Input onKeyDown={onAddTodo} />
      <Items />
    </div>
  );
}

export default App;
