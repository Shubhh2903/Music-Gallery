/** @format */

import React from "react";
import Guy from "../src/assets/Guy.png";
import styled from "styled-components/macro";
function Thanks() {
  return (
    <Container>
      <GuyWrapper />
      <Info>
        <Text>Thanks for listening</Text>
        <SubText>Now create an account</SubText>
        <CreateBtn>Create Account</CreateBtn>
      </Info>
    </Container>
  );
}
export default Thanks;
const CreateBtn = styled.button`
  background-color: #d48586;
  color: #fff;
  font-family: Cabin-Light;
  font-size: 15px;
  width: 200px;
  border:none;
  border-radius:2px;
  height:50px;
  margin-top:10px;
`;
const SubText = styled.div`
  font-family: Cabin-Light;
  font-size: 20px;
  color: #fff;
  text-align: right;
  padding-top: 10px;
`;
const Text = styled.div`
  text-align: right;
  color: #fff;
  font-family: Cabin-Bold;
  font-size: 32px;
`;
const Info = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  width: 50%;
`;
const Container = styled.div`
  display: flex;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    #d48586,
    #d48586 50%,
    #454172 50%
  );
`;
const Title = styled.div`
  font-family: Cabin-Bold;
  font-size: 22px;
  padding: 93px 0 7px 7px;
  color: #fff;
`;
const GuyWrapper = styled.div`
  background-image: url(${Guy});
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  width: 500px;
  margin-left: 50px;
  margin-top: 163px;
`;
