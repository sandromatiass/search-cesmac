import { CMain, CSearch, RSearch } from "./SearchSection.styles";

const SearchSection = () =>{
  return (
    <CMain>
      <CSearch>
        <h2>Faça Aqui sua Pesquisa</h2>
        <p>Arquitetura e Organização de Computadores e Sistemas Operacionais</p>
        <input type="search" placeholder="Faça sua Pesquisa..."/>
        <button type="submit">
          Buscar
        </button>
      </CSearch>

      <RSearch>
        
      </RSearch>
    </CMain>
  )
}

export default SearchSection;