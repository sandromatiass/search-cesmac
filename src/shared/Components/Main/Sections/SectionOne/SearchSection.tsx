import { useState } from "react";
import { CButtons, CContent, CMain, CSearch, RSearch } from "./SearchSection.styles";
import dataContent from "./data/data.json";

interface SubThemes {
  title: string;
  content: string;
  theme: string;
}

const SearchSection = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResults] = useState<SubThemes[]>([]);
  const [searchNotFound, setSearchNotFound] = useState<boolean>(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

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
    }

    setSearchResults(
      results.map((item) => ({
        title: item.title || "",
        content: item.content,
        theme: item.theme || "",
      }))
    );
  };

  const toggleExpandedCard = (index: number) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(null);
    } else {
      setExpandedCardIndex(index);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setSearchResults([]);
  };

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
            <CContent
              key={index}
              onClick={() => toggleExpandedCard(index)}
              $Expanded={expandedCardIndex === index}
            >
              <a>
                  <h3>{item.theme}</h3>
                  {expandedCardIndex === index && (
                  <button
                    onClick={() => {
                      toggleExpandedCard(index);
                    }}
                  >
                    X
                  </button>
                  )}
                <p className="identification">
                  <strong>Assunto:</strong> {item.title}
                </p>
                <p>
                  {expandedCardIndex === index ? item.content : `${item.content.slice(0, 200)}...`}
                  {expandedCardIndex === index && item.content.length > 200 && (
                    <button onClick={() => toggleExpandedCard(index)}>X</button>
                  )}
                </p>
              </a>
              
            </CContent>
          ))
        )}
      </RSearch>
    </CMain>
  );
};

export default SearchSection;
