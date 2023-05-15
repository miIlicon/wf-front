/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { EventStatusButtonProps } from "../../@types/typs";

export default function EventStatusButton({
  isRunning,
}: EventStatusButtonProps) {
  const text = isRunning ? "진행 중인 이벤트" : "종료된 이벤트";
  return (
    <label
      css={css`
        width: 9em;
        height: 2em;
        color: #3182f6;
        opacity: ${isRunning ? "1" : "80%"};
        background-color: ${isRunning
          ? "rgba(49, 130, 246, 0.16)"
          : "rgba(124, 124, 124, 0.4)"};
        border: none;
        ${isRunning
          ? css`
              filter: grayscale(0%);
            `
          : css`
              filter: grayscale(100%);
            `}
        border-radius: 0.3em;
        font-size: 12px;

        @media (max-width: 479px) {
          font-size: 9px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 10px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 11px;
        }
        @media all and (min-width: 1100px) {
          font-size: 12px;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Pretendard-Regular";
      `}
    >
      {text}
    </label>
  );
}
