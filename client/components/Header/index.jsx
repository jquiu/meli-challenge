import Image from "next/image";
import SearchBar from "./components/Search/index";
import { HeaderContainer, Wrapper } from "./style";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Link href={`/`}>
          <img
            src={"/logo__small@2x.png"}
            alt="logo"
            width='88'
            height='64'
          />
        </Link>
        <SearchBar />
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
