import Link from "next/link";
import Item from "../Item/index";

const ItemList = ({ items }) => {
  return (
    <div>
      {items && (
        <>
          {items.map((element, idx) => (
            <Item key={element.id} item={element} />
          ))}
        </>
      )}
    </div>
  );
};

export default ItemList;
