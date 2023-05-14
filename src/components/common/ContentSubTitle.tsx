/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { contentTextProps } from "../../@types/typs";

export default function ContentSubTitle({ text }: contentTextProps) {
  return (
    <span
      css={css`
        display: block;
        color: #4e5968;
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;

        @media (max-width: 479px) {
          font-size: 10px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 11px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 13px;
        }
        @media all and (min-width: 1100px) {
          font-size: 16px;
        }
      `}
    >
      {text}
    </span>
  );
}
