import { useState } from "react";
import { CMain, CSearch, RSearch } from "./SearchSection.styles";
import dataContent from "./data/data.json"

interface SubThemes {
  title: string;
  content: string;
}

const SearchSection = () =>{

  const [ search, setSearch ] = useState<string>("")
  const [ searchResult,  setSearchResults ] =  useState<SubThemes[]>([]);

  const handleSearch = () => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const keywords = search.toLowerCase().split(" ");
    const results = dataContent.subthemes.filter((item) => {
      const title = item.title ? item.title.toLowerCase() : "";
      const content = item.content.toLowerCase();
      return keywords.some(keyword => title.includes(keyword) || content.includes(keyword));
    });
    setSearchResults(results.map(item => ({
      title: item.title || item.nome || "",
      content: item.content
    })));
  };

  const clearSearch = () => {
    setSearch("");
    setSearchResults([]);
  }
  
  console.log(search)

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
        />
        <button type="button" onClick={handleSearch}>
          Buscar
        </button>
        <button type="button" onClick={clearSearch}>
          Limpar Pesquisa
        </button>
      </CSearch>

      <RSearch>
        {searchResult.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </RSearch>
    </CMain>
  )
}

export default SearchSection;