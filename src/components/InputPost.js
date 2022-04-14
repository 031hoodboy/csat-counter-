import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";

const InputPost = () => {
  const [content, setContent] = useState("");
  const [number, setNumber] = useState("");

  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };

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
        "https://ec34-2401-c080-1c02-d18-5400-3ff-fef1-6ea4.jp.ngrok.io/post",
        body
      )
      .then((res) => console.log(res));
  };

  const Register = () => {
    alert("등록되었습니다.");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <RegisterWrapper>
      <RegisterInput
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={contentHandler}
        type="text"
        maxLength="50"
      />
      <RegisterButton onClick={onOpen} type="button">
        등록
      </RegisterButton>
      {open ? (
        <ModalContainer>
          <Modal onSubmit={submitHandler}>
            <ModalTitle>등록하시겠습니까?</ModalTitle>
            <ModalContentWrapper>
              <ModalContent>
                전화번호를 입력하시면 추첨을 통해 커피 상품권을 드립니다.
              </ModalContent>
              <ModalPhoneInput
                placeholder="전화번호"
                value={number}
                onChange={numberHandler}
                type="text"
                maxLength="13"
              />
            </ModalContentWrapper>
            <RegisterButtonWrapper>
              <CancelButton onClick={onOpen}>취소</CancelButton>
              <ModalRegisterButton type="submit" onClick={Register}>
                등록
              </ModalRegisterButton>
            </RegisterButtonWrapper>
          </Modal>
        </ModalContainer>
      ) : null}
    </RegisterWrapper>
  );
};

const bounce = keyframes`
  0% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
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

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.form`
  width: 450px;
  background: #3e4044;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  animation: ${bounce} 0.3s;
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ModalContent = styled.div``;

const ModalPhoneInput = styled(RegisterInput)`
  width: calc(100% - 48px);
  margin-top: 25px;
`;

const RegisterButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const CancelButton = styled.button`
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
  /* border: 0.5px solid #fff; */
  background-color: #313235;
  border-radius: 10px;
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

const ModalRegisterButton = styled(CancelButton)`
  background-color: #1859ff;
  border: none;
  margin-left: 10px;
`;

export default InputPost;
