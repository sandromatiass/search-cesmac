import styled from "styled-components";

export const CHeader = styled.header `
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  
  background: #0076B6;
  font-family: "Tilt Neon", sans-serif;

  nav ul {
    display: flex;
    gap: 0.5rem;
    font-size: 1.2em;
    
    :hover {
      color: #FFE519;
      text-decoration: underline;
    }
  }

  li a {
    text-decoration: none;
    color: #ffffff;
  }
`
