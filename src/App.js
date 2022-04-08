import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CalendarImg from "./assets/calendar.png";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <PageWrapper>
      <PageBlock>
        <Emoji />
        <Title>Freedom Timer</Title>
        <Time>
          {time.toLocaleDateString()}&nbsp;
          {time.toLocaleTimeString()}
        </Time>

        <Dday>D-224</Dday>
        <ComunityBlockWrapper>
          <Coments>Comments 12</Coments>
          <ComunityBlock>
            <CommentBlock></CommentBlock>
            <CommentBlock></CommentBlock>
            <CommentBlock></CommentBlock>
            <CommentBlock></CommentBlock>
            <CommentBlock></CommentBlock>
            <CommentBlock></CommentBlock>
          </ComunityBlock>
        </ComunityBlockWrapper>
        <RegisterWrapper>
          <RegisterInput placeholder="내용을 입력해주세요"></RegisterInput>
          <RegisterButton>등록</RegisterButton>
        </RegisterWrapper>
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

const Time = styled.div`
  margin-top: 10px;
  font-size: 20px;
  @media screen and (max-width: 630px) {
    font-size: 16px;
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

const ComunityBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Coments = styled.div`
  margin: 15px 20px;
  font-weight: 700;
`;

const ComunityBlock = styled.div`
  width: calc(100% - 40px);
  height: 30vh;
  max-height: 400px;
  padding: 10px 20px 20px 20px;
  background-color: #313235;
  border-radius: 12px;
  overflow: scroll;
`;

const CommentBlock = styled.div`
  height: 90px;
  background-color: #3e4044;
  border-radius: 10px;
  margin-top: 10px;
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

const RegisterWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const RegisterInput = styled.input`
  background-color: #313235;
  outline: none;
  border: none;
  padding: 12px 24px 12px 24px;
  color: #999999;
  border-radius: 10px;
  width: 85%;
  @media screen and (max-width: 630px) {
    padding: 8px 12px 8px 12px;
  }
`;

const RegisterButton = styled.div`
  width: 5%;
  min-width: 24px;
  padding: 12px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  background-color: #1859ff;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
  &:active {
    transform: scale(0.97);
  }
  @media screen and (max-width: 630px) {
    padding: 8px 14px;
  }
`;

export default App;
