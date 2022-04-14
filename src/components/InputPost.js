import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const InputPost = () => {
  const [content, setContent] = useState("");
  const [number, setNumber] = useState("");

  const contentHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const numberHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(content);
    console.log(number);
    let body = {
      content: content,
      number: number,
    };

    axios
      .post(
        "https://eaf0-2401-c080-1c02-d18-5400-3ff-fef1-6ea4.jp.ngrok.io/post",
        body
      )
      .then((res) => console.log(res));
  };

  const Alert = () => {
    alert("등록되었습니다.");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <RegisterWrapper onSubmit={submitHandler}>
      <RegisterInput
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={contentHandler}
        type="text"
        maxLength="50"
      />
      <RegisterButton type="submit" onClick={Alert}>
        등록
      </RegisterButton>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.form`
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

const RegisterButton = styled.button`
  width: 10%;
  min-width: 24px;
  outline: none;
  border: none;
  box-shadow: none;
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
  min-width: 55px;
  &:active {
    transform: scale(0.97);
  }
  @media screen and (max-width: 876px) {
    padding: 8px 14px;
    font-size: 12px;
  }
`;

export default InputPost;
