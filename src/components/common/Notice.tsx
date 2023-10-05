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
        `}
      >
        {text}
      </p>
    </div>
  );
}
