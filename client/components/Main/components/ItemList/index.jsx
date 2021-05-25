import Link from "next/link";
import Item from "../Item/index";

const ItemList = ({ items }) => {
  return (
    <div>
      {items && (
        <ul>
          {items.map((element, idx) => (
            <Item key={element.id} item={element} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
