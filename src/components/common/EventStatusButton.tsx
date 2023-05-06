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
        width: 10em;
        height: 2.5em;
        color: #3182f6;
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
        font-family: "Pretendard-Bold";
      `}
    >
      {text}
    </button>
  );
}
