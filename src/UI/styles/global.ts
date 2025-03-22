import styled from "styled-components";

export const NavBarImg = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 16px;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-size: 6vw;
  font-weight: 800;
  color: ${(props) => props.color || "#ffffff"};
  font-family: "Nunito", sans-serif;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const Subtitle = styled.h2`
  font-size: 1.5vw;
  font-weight: 200;
  color: ${(props) => props.color || "#ffffff"};
  font-family: "Nunito", sans-serif;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10vw 0 10vw;
`;

export const LogoContainer = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Logo = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: #000000;
  text-decoration: none;

  &:hover {
    background-color: #50d79d;
    color: #ffffff;
  }
`;

export const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0 10vw;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.color || "#000000"};
  overflow-x: hidden;
`;

export const Atach = styled.div`
  display: flex;
  min-width: 150px;
  height: auto;
  background-color: rgba(80, 215, 157, 0.5);
  border-radius: 5px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  margin: 8px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border: 1px solid rgba(80, 215, 157, 1);
`;

export const AtachmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonPrimary = styled.button`
  background-color: rgba(80, 215, 157, 0.8);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Nunito", sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDivContainer = styled.div<{ height?: string }>`
  display: flex;
  flex-direction: column;
  padding: 0 10vw;
  margin-top: 10px;
  min-height: ${(props) => props.height || "auto"};
`;
