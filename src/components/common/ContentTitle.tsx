/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { contentTextProps } from "../../@types/typs";

export default function ContentTitle({ text }: contentTextProps) {
  return (
    <span
      css={css`
        display: block;
        color: #4e5968;
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;

        @media (max-width: 479px) {
          font-size: 16px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 18px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 20px;
        }
        @media all and (min-width: 1100px) {
          font-size: 24px;
        }
      `}
    >
      {text}
    </span>
  );
}
