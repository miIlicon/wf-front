/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { TextProps } from "../../@types/typs";

export const MainTitle = ({ text }: TextProps) => {
  return (
    <span
      css={css`
        font-size: 30px;
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
      `}
    >
      {text}
    </span>
  );
};
