const Schema = ({ schema }) => {
  console.log(schema);
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </article>
  );
};

export default Schema;
