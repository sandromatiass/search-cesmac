
import { 
  AboutContainer, 
  ConclusionParagraph, 
  List, 
  ListItem, 
  Title, 
  Text, 
  TeamMembersContainer, 
  TeamMember, 
  TeamMemberImage, 
  CollegeLogo,
  ContainerTeam
} from "./About.styled";

import Sandro from "../../../assets/png/sandro.png";
import Douglas from "../../../assets/png/douglas.png";
import Natalie from "../../../assets/png/natalie.png";
import Vinicius from "../../../assets/png/Vinicius.png";
import Thiago from "../../../assets/png/Thiago.png"
import Cesmac from "../../../assets/png/LogoCesmac.png";

const AboutUs = () => {
  return (
    <>
      <AboutContainer>
        <Title>Apresentação do Projeto de Pesquisa com React, TypeScript e Styled Components</Title>
        
        <Text>Este projeto foi desenvolvido utilizando algumas das mais populares tecnologias da atualidade: React, TypeScript e Styled Components. O objetivo principal foi criar uma ferramenta de pesquisa dinâmica para explorar temas específicos relacionados aos sistemas operacionais e à arquitetura e organização de computadores.</Text>
        
        <List>
          <ListItem><strong>React:</strong> Este é um framework JavaScript de código aberto mantido pelo Facebook. Com o React, podemos construir interfaces de usuário de forma declarativa, eficiente e fácil de manter. Ele oferece uma abordagem componentizada, o que significa que podemos dividir a interface em componentes reutilizáveis, simplificando o desenvolvimento e a manutenção do código.</ListItem>
          <ListItem><strong>TypeScript:</strong> TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela adiciona tipagem estática opcional ao JavaScript, o que proporciona maior segurança e robustez ao código, detectando erros em tempo de desenvolvimento. Com o TypeScript, podemos definir interfaces, tipos de dados e aproveitar outras funcionalidades avançadas que não estão disponíveis no JavaScript puro.</ListItem>
          <ListItem><strong>Styled Components:</strong> Styled Components é uma biblioteca para React e React Native que permite escrever estilos CSS diretamente no JavaScript. Com ela, podemos criar componentes visualmente atraentes e altamente estilizados de uma maneira mais organizada e modular. Além disso, os estilos são encapsulados dentro dos próprios componentes, o que evita conflitos de estilos e facilita a manutenção do código.</ListItem>
        </List>
        
        <Text>Este projeto foi proposto como parte do módulo 5 do curso de Análise e Desenvolvimento de Sistemas. O objetivo era exercitar os conhecimentos adquiridos sobre sistemas operacionais e arquitetura e organização de computadores, oferecendo aos usuários uma ferramenta de pesquisa intuitiva e informativa.</Text>
        
        <List>
          <ListItem><strong>Pesquisa Dinâmica:</strong> Os usuários podem inserir termos de pesquisa e visualizar resultados relacionados aos temas abordados no curso.</ListItem>
          <ListItem><strong>Exibição de Conteúdo:</strong> Os resultados da pesquisa são apresentados de forma clara e organizada, permitindo aos usuários lerem sobre os assuntos de interesse.</ListItem>
          <ListItem><strong>Interatividade:</strong> Os usuários podem expandir os cards de resultado para lerem mais conteúdo, proporcionando uma experiência de usuário mais rica e envolvente.</ListItem>
        </List>
        
        <Text>Os dados utilizados para alimentar o conteúdo da pesquisa foram armazenados em um arquivo JSON. Isso permite uma fácil manutenção e atualização dos dados, além de simplificar o processo de integração com a aplicação React.</Text>
        
        <ConclusionParagraph>Em suma, este projeto representa uma integração harmoniosa entre as tecnologias modernas de desenvolvimento web e os conceitos fundamentais de sistemas operacionais e arquitetura de computadores. Ele demonstra a capacidade de aplicar os conhecimentos teóricos em um contexto prático e oferece uma valiosa oportunidade de aprendizado e prática para os alunos do curso.</ConclusionParagraph>
      </AboutContainer>

      <ContainerTeam>
        <TeamMembersContainer>
          <TeamMember>
            <TeamMemberImage src={Sandro} alt="Membro da equipe 1" />
            <p>Sandro Matias</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={Douglas} alt="Membro da equipe 2" />
            <p>Douglas Marinho</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={Natalie} alt="Membro da equipe 2" />
            <p>Natalie Cavalcante</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={Vinicius} alt="Membro da equipe 2" />
            <p>Paulo Vinícius</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={Thiago} alt="Membro da equipe 2" />
            <p>Thiago J. Oliveira</p>
          </TeamMember>
        </TeamMembersContainer>
        <CollegeLogo src={Cesmac} alt="Logo da Faculdade"/>
      </ContainerTeam>
    </>
  );
};

export default AboutUs;
