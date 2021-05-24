import Link from "next/link";
import { useState } from "react";
import { ItemWrapper, ItemInfo, ItemCity, ItemTitle } from "../../style";
import ItemPrice from "../ItemPrice/index";
import Image from "next/image";

const Item = ({ item }) => {
  return (
    <ItemWrapper>
      <Link href={`/items/${item.id}`}>
        <a>
          <Image
            src={item.picture}
            alt={item.title}
            width={180}
            height={180}
          />
        </a>
      </Link>
      <ItemInfo>
        <ItemPrice priceInfo={item.price} showDecimals={false} />
        {item.free_shipping ? <img src="/ic_shipping.png" alt="Free shipping" width="18" height="18"/>  : null}
        <br />
        <Link href={`/items/${item.id}`}>
          <ItemTitle>{item.title}</ItemTitle>
        </Link>
      </ItemInfo>
      <ItemCity>
        <span>{item.address.city_name}</span>
      </ItemCity>
    </ItemWrapper>
  );
};

export default Item;
