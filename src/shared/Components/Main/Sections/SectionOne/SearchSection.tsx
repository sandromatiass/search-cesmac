import { CMain, CSearch } from "./SearchSection.styles";

const SearchSection = () =>{
  return (
    <CMain>
      <CSearch>
        <h2>Faça Aqui sua Pesquisa</h2>
        <p>Arquitetura e Organização de Computadores e Sistemas Operacionais</p>
        <input type="text" placeholder="Faça sua Pesquisa..."/>
        <button type="submit">
          Buscar
        </button>
      </CSearch>
    </CMain>
  )
}

export default SearchSection;