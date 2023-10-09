/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useLayoutEffect } from "react";

export default function Welcome() {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 3em;
        padding-bottom: 3em;
        box-sizing: border-box;
        row-gap: 1em;
        color: #404040;
        padding-left: 1em;
        padding-right: 1em;

        box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
        border-radius: 14px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: left;
          align-items: center;
          column-gap: 0.5em;

          span {
            font-size: 20px;
            font-family: "Pretendard-Bold";

            @media (max-width: 479px) {
              font-size: 12px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 15px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 17px;
            }
            @media all and (min-width: 1100px) {
              font-size: 20px;
            }
          }
        `}
      >
        <img
          src="https://www.kakaocorp.com/page/ico_tit_culture.gif"
          alt="함께해주셔서 감사해요 이모지"
          css={css`
            width: 2em;
          `}
        />
        <span>첫 오픈을 함께해주셔서 감사해요</span>
      </div>
      <span
        css={css`
          font-family: "Pretendard-Regular";
          font-size: 14px;

          @media (max-width: 479px) {
            font-size: 8px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 10px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 12px;
          }
          @media all and (min-width: 1100px) {
            font-size: 14px;
          }
        `}
      >
        - 밀리콘 팀
      </span>
    </div>
  );
}
