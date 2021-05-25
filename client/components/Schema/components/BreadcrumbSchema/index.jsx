import Schema from "@components/Schema/index";

const BreadcrumbSchema = ({ categories }) => {
  const itemListElement = categories.map((item, idx) => {
    return {
      "@type": "ListItem",
      position: idx,
      name: item.name,
      item: `https://api.mercadolibre.com/categories/${item.id}`,
    };
  });
  const buildBreadcrumbSchema = (item) => {
    return {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemListElement,
    };
  };
  return <Schema schema={buildBreadcrumbSchema()} />;
};

export default BreadcrumbSchema;
