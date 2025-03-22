import { Container } from "../../styles/global";

import HeroContainer from "../../containers/HeroContainer";
import NavBarContainer from "../../containers/NavBarContainer";
import AboutContainer from "../../containers/AboutContainer";
import ExperienceContainer from "../../containers/ExperienceContainer";

type Props = {};

export default function LandingPage({}: Props) {
  return (
    <Container>
      <NavBarContainer />
      <HeroContainer />
      <AboutContainer />
      <ExperienceContainer />
    </Container>
  );
}
