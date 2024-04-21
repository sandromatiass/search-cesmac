import styled from "styled-components";

export const CMain = styled.main`
  font-family: "Tilt Neon", sans-serif;
  background-color: #262625;
  color: #ffffff;
  width: 100%;
  height: 42rem;
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

export const CContent = styled.div `
  background-color: #72736E;
  border: solid 1px;

  width: 20rem;
  height: 10rem;
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