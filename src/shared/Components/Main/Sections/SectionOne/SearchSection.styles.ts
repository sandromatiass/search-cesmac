import styled from "styled-components";

export const CMain = styled.main`
  font-family: "Tilt Neon", sans-serif;
  background-color: #262625;
  color: #ffffff;
  width: 100%;
  height: auto;
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
  }
`

export const RSearch = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  gap: 1.2rem;
`

export const CContent = styled.div `
  background-color: #72736E;
  border: solid 1px;

  width: 20rem;
  height: 10rem;
`