/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { TextProps } from "../../@types/typs";

export default function Notice({ text }: TextProps) {
  return (
    <div
      css={css`
        margin-top: 30px;
      `}
    >
      <p
        css={css`
          font-family: "Pretendard-Regular";
          font-style: normal;
          font-size: 16px;
          line-height: 41px;
          color: #8d96a1;
          letter-spacing: -0.03em;

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
        {text}
      </p>
    </div>
  );
}
