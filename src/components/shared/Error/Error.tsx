import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IError {
  status?: number;
  errorMessage?: string;
  persianMessage?: string;
}

const LinkStyle = {
  width: "100%",
  height: "100%",
  textDecoration: "none",
  display: "flex",
  color: "inherit",
  justifyContent: "center",
  alignItems: "center",
};

const Error: React.FC<IError> = ({
  status = 404,
  errorMessage = "",
  persianMessage = "مشکل فنی پیش اومده",
}) => {
  return (
    <Container>
      <Image>
        <StatusTitle>{status}</StatusTitle>
      </Image>

      <ErrorMessage>{persianMessage}</ErrorMessage>

      <HomeButton>
        <Link to={"/"} style={LinkStyle}>
          بازگشت به صفحه اصلی
        </Link>
      </HomeButton>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 4rem 0 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: black;
`;

const Image = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  width: 90vw;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 4rem;
`;

const StatusTitle = styled.h1`
  font-size: 40px;
`;

const ErrorMessage = styled.h2`
  font-size: 35px;
`;

const HomeButton = styled.div`
  width: 12rem;
  height: 3rem;
  border-radius: 10px;
  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #333333;
  color: #fff;

  transition: all 0.5s ease-out;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
    color: #000;
  }
`;
