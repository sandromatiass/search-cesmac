import { useState } from "react";
import { CButtons, CContent, CMain, CSearch, RSearch } from "./SearchSection.styles";
import dataContent from "./data/data.json";

interface SubThemes {
  title: string;
  content: string;
  identification: string; 
}

const SearchSection = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResults] = useState<SubThemes[]>([]);
  const [searchNotFound, setSearchNotFound] = useState<boolean>(false);

  const handleSearch = () => {
    setSearchNotFound(false);

    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const keywords = search.toLowerCase().split(" ");
    const results = dataContent.themes.flatMap((theme) =>
      theme.subthemes.filter((item) => {
        const title = item.title ? item.title.toLowerCase() : "";
        const content = item.content.toLowerCase();
        return keywords.some((keyword) =>
          title.includes(keyword) || content.includes(keyword)
        );
      })
    );

    if (results.length === 0) {
      setSearchNotFound(true);
    };

    setSearchResults(
      results.map((item) => ({
        title: item.title || "",
        content: item.content,
        identification: item.identification || "",
      }))
    );
  };

  const clearSearch = () => {
    setSearch("");
    setSearchResults([]);
  };

  console.log(search);

  return (
    <CMain>
      <CSearch>
        <h2>Faça Aqui sua Pesquisa</h2>
        <p>Arquitetura e Organização de Computadores e Sistemas Operacionais</p>
        <input
          type="search"
          placeholder="Faça sua Pesquisa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <CButtons>
          <button type="button" onClick={handleSearch}>
            Buscar
          </button>
          <button type="button" onClick={clearSearch}>
            Limpar Pesquisa
          </button>
        </CButtons>
        
      </CSearch>

      <RSearch>
        {searchNotFound ? (
          <div>
            <p>Nenhum resultado encontrado.</p>
          </div>
        ) : (
          searchResult.map((item, index) => (
            <CContent>
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.identification}</p>
                <p>{item.content}</p>
              </div>
            </CContent>
          ))
        )}
      </RSearch>
    </CMain>
  );
};

export default SearchSection;
