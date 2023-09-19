/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import introduceImg from "../../images/main/people.png";
import { cloneflow, spaceEffect } from "../../styles/effects";

export default function Introduce() {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // animation: ${spaceEffect} 1.5s linear infinite;
        margin-top: -7em;
        margin-bottom: -5em;
        z-index: -1;
      `}
    >
      <img
        src={introduceImg}
        alt="메인화면 이미지"
        css={css`
          will-change: transform, opacity;
          width: 60%;
          text-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
        `}
      />
      <div
        css={css`
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          row-gap: 5px;

          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          span {
            font-family: "Pretendard-Black";
            display: block;
            z-index: 999;
            color: white;
            font-size: 30px;
            text-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
          }
        `}
      >
        <span>우리 학교 축제 정보를</span>
        <span>위드 페스티벌에서 편리하게</span>
      </div>
    </div>
  );
}
