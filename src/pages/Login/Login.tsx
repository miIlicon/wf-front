/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { Section } from "../../components/common/components";
import { InputProps, TextProps } from "../../@types/typs";
import logo from "../../images/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../utils/api";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["WF_ID"]);

  const data = new FormData();
  data.append("username", id);
  data.append("password", password);

  const handleSubmit = () => {
    API.post(`/api/v2/member/login`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        alert("로그인을 성공적으로 했어요, 메인 페이지로 이동할게요");
        navigate("/");
        const tokenInfo: any = jwt_decode(res.data.accessToken);
        setCookie(
          "WF_ID",
          {
            AT: res.data.accessToken,
            RT: res.data.refreshToken,
            EXPIRE: tokenInfo.exp,
          },
          {
            path: "/",
            secure: false,
          }
        );

        // sessionStorage.setItem("accessToken", res.data.accessToken);
        // sessionStorage.setItem("refreshToken", res.data.accessToken);
      })
      .catch((error) => {
        console.log(error);
        alert("오류가 발생했는데, 오류를 콘솔 창에 출력했어요");
        // console.log(error);
      });
  };

  return (
    <section
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    >
      <article
        css={css`
          width: 22em;
          display: flex;
          flex-direction: column;
          row-gap: 1em;
        `}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            handleSubmit();
          }
        }}
      >
        <img
          src={logo}
          css={css`
            width: 13em;
            height: auto;
            cursor: pointer;
            transition: 0.4s all;

            &:hover {
              opacity: 80%;
            }
          `}
          alt="로고"
          onClick={() => navigate("/")}
        />
        <div
          css={css`
            font-family: "Pretendard-Regular";
            letter-spacing: -0.03em;
            color: #4e5968;
            display: flex;
            flex-direction: column;
            margin-top: 1em;
            font-size: 14px;

            display: flex;
            flex-direction: column;
            row-gap: 0.7em;
          `}
        >
          <span> 밀리콘팀 아이디</span>
          <Input
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={(event) => {
              setId(event.target.value);
            }}
            value={id}
          />
        </div>
        <div
          css={css`
            font-family: "Pretendard-Regular";
            letter-spacing: -0.03em;
            color: #4e5968;
            display: flex;
            flex-direction: column;
            font-size: 14px;

            display: flex;
            flex-direction: column;
            row-gap: 0.7em;
          `}
        >
          <span> 밀리콘팀 비밀번호</span>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </div>
        <button
          css={css`
            cursor: pointer;
            width: 100%;
            border: none;
            width: 100%;
            height: 3.3em;
            border-radius: 8px;
            color: white;
            font-size: 14px;
            background-color: black;
            font-family: "Pretendard-Bold";
            letter-spacing: -0.03em;
            transition: 0.4s all;

            &:hover {
              opacity: 80%;
            }
          `}
          onClick={handleSubmit}
        >
          {" "}
          관리자 로그인
        </button>
      </article>
    </section>
  );
}

export const Button = ({ text }: TextProps) => {
  return (
    <button
      type="button"
      css={css`
        cursor: pointer;
        width: 100%;
        border: none;
        width: 100%;
        height: 3.3em;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        background-color: black;
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
        transition: 0.4s all;

        &:hover {
          opacity: 80%;
        }
      `}
    >
      {text}
    </button>
  );
};

export const Input = ({ type, placeholder, onChange }: InputProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        css={css`
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 3.3em;
          margin: 1px auto 0;
          font-size: 14px;
          line-height: 20px;
          color: #333d4b;
          background-color: #fff;
          border: none;
          outline: none;
          box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          overflow: hidden;
          border-radius: 8px;
          padding-left: 1em;
          transition: background 0.2s ease, color 0.1s ease;
          box-sizing: border-box;
        `}
        onChange={onChange}
      />
    </>
  );
};
