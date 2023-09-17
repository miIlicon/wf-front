/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { eventProps } from "../../@types/typs";
import CurrentEventType from "./CurrentEventType";

export default function SlideCard({ eventName, eventType }: eventProps) {
  return (
    <div
      css={css`
        width: 100%;
        height: 6.56em;
        background-color: #f8f8f8;
        border-radius: 13px;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
        box-sizing: border-box;
      `}
    >
      <span
        css={css`
          color: black;
          font-family: "Pretendard-Bold";
          font-size: 20px;
          margin-right: auto;
        `}
      >
        {eventName}
      </span>
      <CurrentEventType eventType={eventType} />
    </div>
  );
}
