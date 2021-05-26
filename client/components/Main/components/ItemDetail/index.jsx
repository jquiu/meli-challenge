import Breadcrumbs from "../BreadCrumb/index";
import {
  ItemDetailWrapper,
  ItemDetailContainerDescription,
  ResultsWrapper,
  ItemDetailContainerInfo,
  ItemDetailSubtitle,
  ItemDetailPrice,
  ItemDetailBtn,
  ItemDetailTitle,
} from "../../style";
import Image from "next/image";
import ItemSchema from "@components/Schema/components/ItemSchema/index";
import ItemPrice from "../ItemPrice/index";
import { CONDITIONS } from "../../../../utils/constants";

const ItemDetail = ({ data }) => {
  const { item, categories } = data;
  const condition = CONDITIONS[item.condition]
  
  return (
    <ResultsWrapper>
      <ItemSchema item={item} />
     {categories && <Breadcrumbs categories={categories} />}
      <ItemDetailWrapper>
        <ItemDetailContainerInfo>
          <figure>
            <Image
              src={item.picture}
              alt={item.title}
              width={680}
              height={400}
              layout="intrinsic"
              data-testid="item-image"
            />
          </figure>
          <div>
            <ItemDetailSubtitle>
              {condition} - {item.sold_quantity} vendidios
            </ItemDetailSubtitle>
            <ItemDetailTitle>{item.title}</ItemDetailTitle>
            <ItemDetailPrice>
              <ItemPrice priceInfo={item.price} showDecimals={false} />
            </ItemDetailPrice>
            <ItemDetailBtn aria-label="Comprar">Comprar</ItemDetailBtn>
          </div>
        </ItemDetailContainerInfo>
        <ItemDetailContainerDescription>
          <h2>Descripción del producto</h2>
          <p data-testid="product-description">{item.description}</p>
        </ItemDetailContainerDescription>
      </ItemDetailWrapper>
    </ResultsWrapper>
  );
};

export default ItemDetail;
