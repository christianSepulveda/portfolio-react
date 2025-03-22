import { Subtitle, Title, HeroDiv } from "../../styles/global";

export default function HeroContainer() {
  const actualYear = new Date().getFullYear();
  const startYear = 2021;
  const years = actualYear - startYear;

  return (
    <HeroDiv>
      <Title>Christian Sepúlveda</Title>
      <Title color="#50d79d">React Native Developer</Title>
      <Subtitle>
        {"Desarrollador de Aplicaciones Moviles multiplataforma con "}
        <span style={{ color: "#50d79d" }}>
          {`${years} años de experiencia`}
        </span>
      </Subtitle>
    </HeroDiv>
  );
}
