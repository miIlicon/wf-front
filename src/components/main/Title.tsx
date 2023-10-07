/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { titleProps } from "../../@types/typs";

export default function Title({ text, used }: titleProps) {
  return (
    <div
      css={css`
        color: #333d4b;
        font-size: 25px;
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
        margin-bottom: ${used === "main" && "0.5em"};

        display: flex;
        align-items: center;
        column-gap: 0.3em;

        @media (max-width: 479px) {
          font-size: 19px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 21px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 23px;
        }
        @media all and (min-width: 1100px) {
          font-size: 25px;
        }
      `}
    >
      <img
        src="https://www.kakaocorp.com/page/ico_tit_news.gif"
        css={css`
          width: 1.5em;
        `}
      />
      <span>{text}</span>
    </div>
  );
}
