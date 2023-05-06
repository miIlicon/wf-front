/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { contentTextProps } from "../../@types/typs";

export default function ContentSubTitle({ text }: contentTextProps) {
  return (
    <span
      css={css`
        font-size: 17px;
        display: block;
        color: #4e5968;
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;
      `}
    >
      {text}
    </span>
  );
}
