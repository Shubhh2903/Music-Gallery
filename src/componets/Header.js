import React from "react";
import logo from "../assets/logo.png";
import speaker from "../assets/speaker.png";
import styled from "styled-components/macro";
function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <Title>
          MUSIC
          <br /> GALLERY
        </Title>
        <SubTitle>Music brings harmony to the world</SubTitle>
        <Button>Visit Us Now</Button>
        <Speaker />
        <InfoTitle>We are glad you are here !</InfoTitle>
        <InfoSubTitle>
          For <b>New memberships</b>
        </InfoSubTitle>
        <Info>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor<br/> incididunt ut labore e
        </Info>
      </HeaderContainer>
    </>
  );
}

export default Header;
const Info = styled.p`
  font-family: Cabin-Light;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 1.4;
  padding-bottom: 100px;
`;
const InfoSubTitle = styled.div`
  font-family: Cabin-Medium;
  font-size: 36px;
  text-align: center;
  color: #fff;
  margin-top: 10px;
  width: 400px;
`;
const InfoTitle = styled.div`
  font-family: Rubik-Medium;
  font-size: 20px;
  color: #fff;
  line-height: 1;
  text-align: center;
`;
const Speaker = styled.div`
  background-image: url(${speaker});
  background-repeat: no-repeat;
  background-size: contain;
  height: 395px;
  width: 500px;
`;
const Button = styled.div`
  background-color: black;
  color: #fff;
  line-height: 1.2;
  padding: 10px 20px 10px 20px;
  font-family: Cabin-Bold;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  margin-bottom: 40px;
`;
const SubTitle = styled.div`
  color: #fff;
  font-size: 15px;
  line-height: 1.4;
  padding: 20px;
`;
const Title = styled.div`
  color: #fff;
  font-family: Cabin-Bold;
  font-size: 59px;
  line-height: 1;
  padding: 10px 10px 0 10px;
  text-align: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#8b79b9, #ec8787, #8b79b9);
`;
const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  width: 100px;
  margin-top: 15px;
`;
