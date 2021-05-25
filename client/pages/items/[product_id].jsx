import Header from "../../components/Header/index";
import ItemDetail from "../../components/Main/components/ItemDetail/index";
import NotFound from "../../components/Main/components/NotFound/index";
import { getData } from "../api/detail";
import Head from "next/head";

function ProductItem({ product, data }) {
  const { item } = data;

  const setAlternante = (platform) => {
    const link =
      platform === "android"
        ? `android-app://com.mercadolibre/meli/item?id=${item.id}`
        : `ios-app://463624852/meli/item?id=${item.id}`;
    return link;
  };
  return (
    <div>
      <Head>
        <title>{item.title} | MercadoLibre.com</title>
        <meta name="description" content={item.description} />
        <meta property="og:description" content={item.description} />
        <meta property="og:title" content={item.title} />
        <meta property="og:image" content={item.picture} />
        <link rel="canonical" href={item.permalink} />
        <link rel="alternate" href={setAlternante("ios")} />
        <link rel="alternate" href={setAlternante("android")} />
      </Head>
      <Header />
      {!!item ? (
        <ItemDetail id={product.product_id} data={data} />
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default ProductItem;

export async function getServerSideProps(context) {
  const { product_id } = context.query;
  const jsonData = await getData(product_id);
  return {
    props: {
      product: {
        product_id,
      },
      data: jsonData,
    }, // will be passed to the page component as props
  };
}
