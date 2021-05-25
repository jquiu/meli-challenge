import BreadcrumbSchema from "@components/Schema/components/BreadcrumbSchema";
import { BreadCrumbContainer, BreadCrumbList } from "../../../Header/style";

const Breadcrumbs = ({ categories }) => {
  return (
    <BreadCrumbContainer aria-label="Breadcrumb">
      <BreadcrumbSchema categories={categories} />
      <BreadCrumbList>
        {categories.map((breadCrumItem, idx) => (
          <li key={breadCrumItem.id}>
            {categories.length === idx + 1 ? (
              <a href={`/${breadCrumItem.id}`} aria-current="page">
                {breadCrumItem.name}
              </a>
            ) : (
              <a href={`/${breadCrumItem.id}`}>{breadCrumItem.name}</a>
            )}
          </li>
        ))}
      </BreadCrumbList>
    </BreadCrumbContainer>
  );
};

export default Breadcrumbs;
