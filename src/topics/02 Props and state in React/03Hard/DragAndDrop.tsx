import React, { useState } from "react";

type Item = {
  id: number;
  content: string;
};

type DragAndDropProps = {
  items: Item[];
};

const DragAndDrop = ({ items }: DragAndDropProps) => {
  const [draggedItem, setDraggedItem] = useState<Item | null>(null);

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    item: Item
  ) => {
    setDraggedItem(item);
  };

  const handleDragEnter = (
    event: React.DragEvent<HTMLLIElement>,
    targetItem: Item
  ) => {
    if (draggedItem === null) return;

    // Swap items
    const updatedItems = items.map((item) => {
      if (item.id === draggedItem.id) return targetItem;
      if (item.id === targetItem.id) return draggedItem;
      return item;
    });

    setDraggedItem(targetItem);
    // Update the items array with the new order
    setItems(updatedItems);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          draggable
          onDragStart={(event) => handleDragStart(event, item)}
          onDragEnter={(event) => handleDragEnter(event, item)}
          onDragEnd={handleDragEnd}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default DragAndDrop

function setItems(updatedItems: Item[]) {
  throw new Error("Function not implemented.");
}
