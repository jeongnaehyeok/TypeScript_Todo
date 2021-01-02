import React, { useEffect, useState } from 'react';
import './Items.css';

export interface ItemsProps {
  itemList: string[];
  onDeleteItem: (index: string) => void;
}

function Items({ itemList, onDeleteItem }: ItemsProps) {
  const [items, setItems] = useState<string[]>([]);
  const onItemDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    onDeleteItem(e.currentTarget.value);
  };
  useEffect(() => {
    setItems(itemList);
  }, [itemList]);
  return (
    <ul className="items--container">
      {items.map((item: string, index: number) => {
        return (
          <li className="items--item" key={`${index.toString()}_${item}`}>
            <p>
              {index}
              번째
            </p>
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
Items.defaultProps = {
  itemList: [],
  onDeleteItem: () => {},
} as Partial<ItemsProps>;

export default Items;
