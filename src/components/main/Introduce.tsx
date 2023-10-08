/** @jsxImportSource @emotion/react */
import React, { useLayoutEffect } from "react";
import { css } from "@emotion/react";
import introduceImg from "../../images/main/people.png";
import { cloneflow, spaceEffect } from "../../styles/effects";
import { ImagePreload } from "../../hooks/ImagePreload";

export default function Introduce() {
  useLayoutEffect(() => {
    ImagePreload(introduceImg);
  }, []);

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // animation: ${spaceEffect} 1.5s linear infinite;
        margin-top: -5em;
        margin-bottom: -3em;
        z-index: -1;

        @media (max-width: 479px) {
          font-size: 13px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 14px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 15px;
        }
        @media all and (min-width: 1100px) {
          font-size: 16px;
        }
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
            white-space: pre;

            @media (max-width: 479px) {
              font-size: 18px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 22px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 26px;
            }
            @media all and (min-width: 1100px) {
              font-size: 30px;
            }
          }
        `}
      >
        <span>우리 학교 축제 정보를</span>
        <span>위드 페스티벌에서 편리하게</span>
      </div>
    </div>
  );
}
