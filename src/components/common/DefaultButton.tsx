/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { ButtonProps } from "../../@types/typs";

export default function DefaultButton({
  text,
  isSelect,
  value,
  onClick,
}: ButtonProps) {
  return (
    <button
      css={css`
        width: 14.81em;
        height: 3.25em;
        color: ${isSelect ? "white" : "black"};
        background-color: ${isSelect ? "#3182F6" : "#F2F4F6"};
        border: none;
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

        font-family: "Pretendard-Medium";
        font-style: normal;
        line-height: 1.18em;
        letter-spacing: -0.03em;
        cursor: pointer;
        margin: 0 6px;
        transition: 0.4s all;
      `}
      onClick={() => onClick(value)}
      value={value}
    >
      {text}
    </button>
  );
}
