import { BreadCrumbContainer, BreadCrumbList } from "../../../Header/style";

const Breadcrumbs = ({ categories }) => {
  return (
    <BreadCrumbContainer>
      <BreadCrumbList>
        {categories.map((breadCrumItem, idx) => (
          <li key={idx}>{breadCrumItem}</li>
        ))}
      </BreadCrumbList>
    </BreadCrumbContainer>
  );
};

export default Breadcrumbs;
