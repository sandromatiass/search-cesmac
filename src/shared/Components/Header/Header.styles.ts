import styled from "styled-components";

export const CHeader = styled.header `
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  
  background: #010D00;
  font-family: "Tilt Neon", sans-serif;
  color: #ffffff;

  nav ul {
    display: flex;
    gap: 0.5rem;
    font-size: 1.2em;
    
    :hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }

  li a {
    text-decoration: none;
    color: #ffffff;
  }
`
