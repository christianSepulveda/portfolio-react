import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import { Logo, LogoContainer, NavBar, NavBarImg } from "../../styles/global";

export default function NavBarContainer() {
  return (
    <NavBar>
      <LogoContainer href="https://www.instagram.com/iamchristiandev/">
        <Logo>CS</Logo>
      </LogoContainer>

      <div>
        <a href="https://github.com/christianSepulveda">
          <NavBarImg src={Github} alt="Github" />
        </a>

        <a href="https://www.linkedin.com/in/christiandev30">
          <NavBarImg src={Linkedin} alt="Linkedin" />
        </a>
      </div>
    </NavBar>
  );
}
