/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { EventStatusButtonProps } from "../../@types/typs";

export default function EventStatusButton({
  status,
  isRunning,
}: EventStatusButtonProps) {
  const text = status ? "진행 중인 이벤트" : "종료된 이벤트";
  return (
    <label
      css={css`
        width: 9em;
        height: 2.3em;
        background-color: ${isRunning ? "#3182F6" : "white"};
        color: ${isRunning ? "white" : "#556372"};
        transition: 0.4s all;

        border: none;
        cursor: pointer;
        border-radius: 30em;
        box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12);
        font-size: 12px;

        @media (max-width: 479px) {
          font-size: 9.5px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 10.5px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 11.5px;
        }
        @media all and (min-width: 1100px) {
          font-size: 12.5px;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Pretendard-Medium";
      `}
    >
      {text}
    </label>
  );
}
