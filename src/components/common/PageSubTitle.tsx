/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { contentTextProps } from "../../@types/typs";

export default function PageSubTitle({ text }: contentTextProps) {
  return (
    <p
      css={css`
        font-family: "Pretendard-Regular";
        font-style: normal;
        line-height: 1.18em;
        letter-spacing: -0.03em;
        color: #4e5968;
        margin-bottom: 3em;

        @media (max-width: 479px) {
          font-size: 10px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 12px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 14px;
        }
        @media all and (min-width: 1100px) {
          font-size: 16px;
        }
      `}
    >
      {text}
    </p>
  );
}
