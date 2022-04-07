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
          {time.toLocaleDateString()}
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
          Designed by &nbsp;<Profile>Awareso</Profile>&nbsp; & Engineering
          by&nbsp;
          <Profile>hoodboy</Profile>
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
`;

const Time = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const Dday = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #1859ff;
  margin-top: 30px;
`;

const ComunityBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Coments = styled.div`
  margin: 15px 20px;
  font-weight: 700;
  font-size: 14px;
`;

const ComunityBlock = styled.div`
  width: calc(100% - 40px);
  height: 400px;
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
`;

const Profile = styled.div`
  font-weight: 700;
`;

const RegisterWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

const RegisterInput = styled.input`
  background-color: #313235;
  outline: none;
  border: none;
  padding: 12px 0 12px 24px;
  color: #999999;
  border-radius: 10px;
  font-size: 14px;
  width: 88%;
`;

const RegisterButton = styled.div`
  padding: 12px 28px;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  background-color: #1859ff;
  border-radius: 10px;
  margin-left: 10px;
`;

export default App;
