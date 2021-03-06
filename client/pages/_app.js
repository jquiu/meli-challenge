import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mercado Libre Colombia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.4"/>
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
          
        />
        <link
          rel="canonical"
          href="https://www.mercadolibre.com.co"
          
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
