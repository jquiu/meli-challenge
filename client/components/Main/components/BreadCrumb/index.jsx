import BreadcrumbSchema from "@components/Schema/components/BreadcrumbSchema";
import { BreadCrumbContainer, BreadCrumbList } from "../../../Header/style";

const Breadcrumbs = ({ categories }) => {
  return (
    <BreadCrumbContainer>
      <BreadcrumbSchema categories={categories} />
      <BreadCrumbList>
        {categories.map((breadCrumItem, idx) => (
          <li key={idx}>{breadCrumItem}</li>
        ))}
      </BreadCrumbList>
    </BreadCrumbContainer>
  );
};

export default Breadcrumbs;
