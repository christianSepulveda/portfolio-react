import {
  ButtonContainer,
  ButtonPrimary,
  InfoDivContainer,
  LogoContainer,
  Subtitle,
  Title,
} from "../../styles/global";

export default function ExperienceContainer() {
  const linkedin = "https://www.linkedin.com/in/christiandev30/";

  const onClick = () => {
    window.open(linkedin);
  };

  return (
    <InfoDivContainer height="100vh">
      <Title>
        Experiencia
        <span style={{ color: "#50d79d" }}>{` Laboral`}</span>
      </Title>

      <Subtitle>
        <span style={{ color: "#50d79d" }}>{`AppCoopeuch: `}</span>{" "}
        {"una de mis contribuciones más recientes, bajo la celula de incidencias, se me asignó la tarea de resolver diferentes bugs y mejorar la experiencia de usuario " +
          "mediante la corrección de errores y mejora de funcionalidades."}
      </Subtitle>

      <Subtitle>
        <span
          style={{ color: "#50d79d" }}
        >{`Coopeuch Sitio Público y Portal Privado: `}</span>{" "}
        {"mantención de estos productos mediante la solución de bugs y mejora en experiencia de usuario, en esta oportunidad no solo se resolvieron incidencias en la Web, " +
          "también se analizaron diferentes servicios backend e infraestructura según el caso que se presentara."}
      </Subtitle>

      <Subtitle>
        <span style={{ color: "#50d79d" }}>{`CatchUp: `}</span>{" "}
        {"Aplicacion desarrollada desde cero bajo la metodología scrum. La aplicación integraba inteligencia artifical " +
          "y APIs de los dispositivos como Cámara y Bluetooth para la toma de inventario, esta llegó a estar en las 75 tiendas Sodimac a nivel nacional."}
      </Subtitle>

      <Subtitle>
        <span style={{ color: "#50d79d" }}>{`CatchUp BackOffice: `}</span>{" "}
        {"Web desarrollada desde cero bajo la metodología scrum. Esta parte del sistema era la encargada de administrar la reportería de los inventarios " +
          "y el encendido/apagado del modelo IA."}
      </Subtitle>

      <ButtonContainer>
        <ButtonPrimary onClick={onClick}>Ver más</ButtonPrimary>
      </ButtonContainer>
    </InfoDivContainer>
  );
}
