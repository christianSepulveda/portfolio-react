import {
  Atach,
  AtachmentContainer,
  InfoDivContainer,
  InfoTextContainer,
  Subtitle,
  Title,
} from "../../styles/global";

export default function AboutContainer() {
  return (
    <InfoDivContainer height="100vh">
      <Title>
        Perfíl
        <span style={{ color: "#50d79d" }}>{` Profesional`}</span>
      </Title>

      <InfoTextContainer>
        <Subtitle>
          Programador y Analista de Sistemas, llevo programando desde 2017 y me
          integré al mundo profesional en 2021 como desarrollador de
          aplicaciones en Android con Java.
        </Subtitle>

        <Subtitle>
          Con el tiempo me contrataron en empresas con amplio impacto a nivel de
          mercado nacional bajo el cargo de desarrollador React Native,
          aprendiendo tecnologías como Redux, AWS, Expo y demás.
        </Subtitle>

        <Subtitle>
          Del mismo modo, me tenido que integrar a mis conocimientos patrones de
          arquitectura como Clean Architecture y metodologías ágiles como Scrum,
          además, analizando muchas el comportamiento del backend y
          comprendiendo el funcionamiento de las APIs y los Microservicios.
        </Subtitle>

        <br />
        <br />

        <AtachmentContainer>
          <Atach>React Native Expo</Atach>
          <Atach>React JS</Atach>
          <Atach>Styled Components</Atach>
          <Atach>Redux</Atach>
          <Atach>Git</Atach>
        </AtachmentContainer>

        <br />
        <br />

        <AtachmentContainer>
          <Atach>Node</Atach>
          <Atach>Express</Atach>
          <Atach>Clean Architecture</Atach>
          <Atach>Scrum</Atach>
          <Atach>REST Api</Atach>
        </AtachmentContainer>
      </InfoTextContainer>
    </InfoDivContainer>
  );
}
