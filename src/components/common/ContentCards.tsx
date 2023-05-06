/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { CardProps } from "../../@types/typs";

export default function ContentCards({ thumb }: CardProps) {
  return (
    <img
      src={thumb}
      alt="콘텐츠 부가 이미지"
      css={css`
        width: 10em;
        height: 10em;
        border-radius: 0.5em;
      `}
    />
  );
}
