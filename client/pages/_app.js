import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mercado Libre Colombia</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.4"/>
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
          data-head-react="true"
        />
        <link
          rel="canonical"
          href="https://www.mercadolibre.com.co"
          data-head-react="true"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
