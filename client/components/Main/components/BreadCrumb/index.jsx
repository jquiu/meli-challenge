import BreadcrumbSchema from "@components/Schema/components/BreadcrumbSchema";
import { BreadCrumbContainer, BreadCrumbList } from "../../../Header/style";

const Breadcrumbs = ({ categories }) => {
  return (
    <div>
      <BreadcrumbSchema categories={categories} />
      <BreadCrumbContainer aria-label="Breadcrumb">
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
    </div>
  );
};

export default Breadcrumbs;
