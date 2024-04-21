import styled from "styled-components";

export const CMain = styled.main`
  font-family: "Tilt Neon", sans-serif;
  background-color: #262625;
  color: #ffffff;
  width: 100%;
  height: auto;
  margin-bottom: 5rem;
`

export const CSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 1.5rem;
  
  h2, p{
    margin-bottom: 1rem;
  }

  h2{
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
  }

  input {
    border-radius: 15px;
    padding: 0.5rem;
    width: 25rem;
    text-align: center;
    border: none;
    font-family: "Tilt Neon", sans-serif;
    font-size: 1.1em;
  }

  input:focus {
    color: #6833A3;
    outline-color:#ffffff;
  }

  input:focus::placeholder{
    color: #ffffff;
  }
`

export const RSearch = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.2rem;
`

export const CContent = styled.div<{ $Expanded: boolean }>`
  background-color: #72736E;
  width: 20rem;
  padding: 0.8rem;
  text-align: center;
  cursor: pointer;
  margin-bottom: 1rem;

  position: ${({ $Expanded }) => ($Expanded ? 'fixed' : 'initial')};
  top: 39%;
  left: 50%;
  transform: ${({ $Expanded }) => ($Expanded ? 'translate(-50%, -50%)' : 'none')};
  z-index: ${({ $Expanded }) => ($Expanded ? '999' : 'auto')};
  width: ${({ $Expanded }) => ($Expanded ? '50%' : '20rem')}; 
  max-height: ${({ $Expanded }) => ($Expanded ? '80vh' : 'none')};
  border:  ${({ $Expanded }) => ($Expanded ? 'solid #F29F05' : 'yellow')};
  overflow-y: auto;

  

  .identification {
    color: #ffffff;
    padding: 0.5rem;

    strong {
      color: #F29F05;
      font-weight: bolder;
    }
  }

  div {
    margin-top: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    padding: 0.2rem;
    font-size: 1.1em;
    font-weight: bold;
  }

  a {
    button{
      position: absolute;
      top: 1px;
      right: 1px;
      background-color: transparent;
      color: white;
      border: none;
      font-size: 1.2em;
      cursor: pointer;
      color: #F29F05;
      background-color: #6833A3;
    }
  }
`

export const CButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 0.2rem;

  button {
    background-color: #F2F2E4;
    border: none;
    font-family: "Tilt Neon", sans-serif;
    cursor: pointer;
    font-size: 1.2em;
    border-radius: 5px;
    padding: 0.3rem;
  }

  button:hover{
    background-color: #6833A3;
    color: #ffffff;
  }
`