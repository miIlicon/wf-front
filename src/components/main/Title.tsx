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
      `}
    >
      {text}
    </div>
  );
}
