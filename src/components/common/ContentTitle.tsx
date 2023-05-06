/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { contentTextProps } from "../../@types/typs";

export default function ContentTitle({ text }: contentTextProps) {
  return (
    <span
      css={css`
        font-size: 24px;
        display: block;
        color: #4e5968;
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
      `}
    >
      {text}
    </span>
  );
}
