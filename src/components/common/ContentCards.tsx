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

        @media (max-width: 479px) {
          font-size: 10px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 12px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 14px;
        }
        @media all and (min-width: 1100px) {
          font-size: 16px;
        }
      `}
    />
  );
}
