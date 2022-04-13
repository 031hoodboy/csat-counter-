import React from "react";
import styled from "styled-components";
import CalendarImg from "./assets/calendar.png";
import { dDayResult } from "./components/DDay";
import Clock from "./components/Clock";
import Community from "./components/Community";
import InputPost from "./components/InputPost";
function App() {
  return (
    <PageWrapper>
      <PageBlock>
        <Emoji />
        <Title>Freedom Timer</Title>
        <Clock />
        <Dday>D-{dDayResult}</Dday>
        <Community />
        <InputPost />
        <Designed>
          Designed by &nbsp;
          <Profile
            href="https://www.instagram.com/seunguk_/?hl=ko"
            target="_blank"
          >
            Awareso
          </Profile>
          &nbsp; & Engineering by&nbsp;
          <Profile
            href="https://www.instagram.com/031_hood_boy/?hl=ko"
            target="_blank"
          >
            hoodboy
          </Profile>
        </Designed>
      </PageBlock>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #000;
  display: flex;
  align-items: center;
  @font-face {
    font-family: "Pretendard Variable";
    src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css");
    font-weight: bold;
    font-style: normal;
  }
  font-family: "Pretendard Variable";
  font-size: 14px;
  @media screen and (max-width: 630px) {
    font-size: 12px;
  }
`;

const PageBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 64px 40px 64px 40px;
  background-color: #242527;
  height: calc(90vh - 128px);
  align-items: center;
  border-radius: 24px;
  margin: 0 auto;
  overflow: none;
  display: flex;
  flex-direction: column;
`;

const Emoji = styled.div`
  background-image: url(${CalendarImg});
  width: 32px;
  height: 32px;
  background-position: center;
  background-size: contain;
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 700;
  margin-top: 24px;
  @media screen and (max-width: 630px) {
    font-size: 36px;
  }
`;

const Dday = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #1859ff;
  margin-top: 30px;
  @media screen and (max-width: 630px) {
    font-size: 34px;
  }
`;

const Designed = styled.div`
  margin: 24px 0;
  color: #848484;
  display: flex;
  font-weight: 400;
  text-align: center;
`;

const Profile = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  color: #848484;
  text-align: center;
  @media screen and (max-width: 630px) {
    font-size: 14px;
  }
`;

export default App;
