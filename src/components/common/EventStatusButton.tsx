/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { EventStatusButtonProps } from "../../@types/typs";

export default function EventStatusButton({
  isRunning,
}: EventStatusButtonProps) {
  const text = isRunning ? "진행 중인 이벤트" : "종료된 이벤트";
  return (
    <button
      css={css`
        width: 90px;
        height: 20px;
        color: #3182f6;
        opacity: ${isRunning ? "1" : "80%"};
        background-color: ${isRunning
          ? "rgba(49, 130, 246, 0.16)"
          : "rgba(124, 124, 124, 0.4)"};
        border: none;
        border-radius: 0.3em;
        font-size: 11px;
        font-weight: 600;

        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Pretendard-Regular";
      `}
    >
      {text}
    </button>
  );
}
