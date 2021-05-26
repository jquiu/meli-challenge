import Link from "next/link";
import { useState, useEffect } from "react";
import { SearchFrom, SearchInput, SearchLink } from "../../style";
import Router from 'next/router'
import SearchSchema from "@components/Schema/components/SearchSchema/index";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [windows, setWindows] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleEnter = (event) => {
    const { key } = event;
    const { value } = event.target;
    if (key === "Enter") {
      Router.push({ pathname: '/items', query: { search: value } })
      setSearch(value);
    }
  };
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("search");
    setWindows(window.location);
    myParam ? setSearch(myParam) : setSearch("");
  }, []);

  return (
    <SearchFrom>
      {!!windows ? <SearchSchema query={search} window={windows} /> : null}
      <SearchInput
        type="search"
        placeholder="Nunca dejes de buscar"
        aria-label="Ingresa lo que quieras encontrar"
        value={search}
        onChange={handleSearch}
        onKeyPress={handleEnter}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        role="search"
        id="search"
        name="search"
      />

      <Link href={`/items?search=${search}`}>
        <SearchLink role="button" >
         <img src="/ic_Search@2x.png" alt="search button" arial-label="search button"/>
        </SearchLink>
      </Link>
    </SearchFrom>
  );
};

export default SearchBar;
