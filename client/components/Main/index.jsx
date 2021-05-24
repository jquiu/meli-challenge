import Breadcrumbs from "./components/BreadCrumb/index";
import { ResultsWrapper, ResultsContainer } from "./style";
import ItemList from "./components/ItemList/index";
import SearchRescue from "./components/SearchRescue/index";

const Main = ({ search }) => {
  return (
    <ResultsWrapper>
      <Breadcrumbs categories={search.categories} />
      <ResultsContainer>
        {!!search.items.length ? <ItemList items={search.items} /> : <SearchRescue />}
      </ResultsContainer>
    </ResultsWrapper>
  );
};

export default Main;
