/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { contentTextProps } from "../../@types/typs";

export default function PageTitle({ text }: contentTextProps) {
  return (
    <h1
      css={css`
        font-family: "Pretendard-ExtraBold";
        font-style: normal;
        line-height: 1.2em;
        letter-spacing: -0.03em;
        color: #333d4b;
        margin-bottom: 1em;

        @media (max-width: 479px) {
          font-size: 22px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 26px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 30px;
        }
        @media all and (min-width: 1100px) {
          font-size: 34px;
        }
      `}
    >
      {text}
    </h1>
  );
}
