import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../modules/todo';
import { RootState } from '../modules';
import './Items.css';

function Items() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.todo);
  const onItemDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteTodo(e.currentTarget.value));
  };
  return (
    <ul className="items--container">
      {items.map((item: string, index: number) => {
        return (
          <li className="items--item" key={`${index.toString()}_${item}`}>
            <p>{item}</p>
            <button
              className="item--delete"
              type="button"
              value={index}
              onClick={onItemDelete}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Items;
