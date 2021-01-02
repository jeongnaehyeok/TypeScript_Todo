import React from 'react';

export interface ItemsProps {
  itemList: string[];
}

function Items({ itemList }: ItemsProps) {
  return (
    <div>
      {itemList.map((item: string, index: number) => {
        return <p key={`${index.toString()}_${item}`}>{item}</p>;
      })}
    </div>
  );
}
Items.defaultProps = {
  itemList: [],
} as Partial<ItemsProps>;

export default Items;
