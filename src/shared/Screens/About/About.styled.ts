import styled from "styled-components";

export const AboutContainer = styled.div`
  font-family: "Tilt Neon", sans-serif;
  background-color: #262625;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.8em;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 1rem;

  strong {
    color: #f29f05;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const ConclusionParagraph = styled.p`
  margin-top: 2rem;
`;

export const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 1.2rem;
  
  p {
    font-weight: 600;
    text-align: center;
    font-size: 1em; 
    color: #ffffff;
  }
`;

export const TeamMember = styled.div`
  width: 150px;
  text-align: center;
`;

export const TeamMemberImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 3px 4px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const CollegeLogo = styled.img`
  max-width: 200px;
  margin-top: 20px;
  padding-bottom: 3rem;
  text-align: center;
`;

export const ContainerTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`