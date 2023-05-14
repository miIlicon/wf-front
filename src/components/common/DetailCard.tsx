/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { CardProps } from "../../@types/typs";

export const DetailThumb = ({ thumb }: CardProps) => {
  return (
    <img
      css={css`
        width: 17.93em;
        height: 100%;
        border-radius: 0.5em;

        @media (max-width: 479px) {
          font-size: 8px;
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
      src={thumb}
      alt=""
    />
  );
};
