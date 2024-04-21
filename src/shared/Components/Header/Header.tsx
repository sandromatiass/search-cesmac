import { CHeader } from "./Header.styles";

const Header = () => {
  return (
    <CHeader>
      <h1>
        Busca do saber - Cesmac
      </h1>

      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/AboutUs">Sobre o projeto</a>
          </li>
        </ul>
      </nav>
    </CHeader>
  )
}

export default Header;