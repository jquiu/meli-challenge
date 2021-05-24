import { NotFoundContainer } from "../../style";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src="/empty_state.svg" />
      <p>Parece que no existe lo que estas buscando</p>
    </NotFoundContainer>
  );
};

export default NotFound;
