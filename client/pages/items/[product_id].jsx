import Header from "../../components/Header/index";
import ItemDetail from "../../components/Main/components/ItemDetail/index";
import NotFound from "../../components/Main/components/NotFound/index";
import { getData } from "../api/detail";
import Head from "next/head";

function ProductItem({ product, data }) {
  const { item } = data;

  const setCanonical = () => {
    return `https://articulo.mercadolibre.com.co/MCO-565045738-termo-acero-inoxidable-1100-ml-mantiene-calorfrio-klatter-_JM`;
  };

  const setAlternante = (platform) => {
    const link =
      platform === "android"
        ? `android-app://com.mercadolibre/meli/item?id=MCO565045738`
        : `ios-app://463624852/meli/item?id=MCO565045738`;
    return link;
  };
  return (
    <div>
      <Head>
        <title>{item.title} | MercadoLibre.com</title>
        <meta
          name="description"
          content={item.description}
          data-head-react="true"
        />
        <meta
          property="og:description"
          content={item.description}
          data-head-react="true"
        />
        <meta property="og:title" content={item.title} data-head-react="true" />
        <meta
          property="og:image"
          content={item.picture}
          data-head-react="true"
        />
        <link rel="canonical" href={setCanonical()} data-head-react="true" />
        <link
          rel="alternate"
          href={setAlternante("ios")}
          data-head-react="true"
        />
        <link
          rel="alternate"
          href={setAlternante("android")}
          data-head-react="true"
        />
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
