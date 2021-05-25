import Schema from "@components/Schema/index";

const SearchSchema = ({ query , window}) => {
  const { href, origin } = window;

  const buildSearchSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: origin,
      potentialAction: [
        {
          "@type": "SearchAction",
          target: href,
          "query-input": `required name=${query}`,
        },
      ],
    };
  };
  return <Schema schema={buildSearchSchema()} />;
};

export default SearchSchema;
