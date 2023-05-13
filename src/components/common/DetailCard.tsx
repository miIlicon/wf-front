/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { CardProps } from "../../@types/typs";

export const DetailThumb = ({ thumb }: CardProps) => {
  return (
    <img
      css={css`
        width: auto;
        height: 23.43em;
        border-radius: 0.5em;
      `}
      src={thumb}
      alt=""
    />
  );
};
