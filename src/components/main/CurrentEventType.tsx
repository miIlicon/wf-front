/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { eventProps } from "../../@types/typs";

export default function CurrentEventType({ eventType }: eventProps) {
  return (
    <div
      css={css`
        font-family: "Pretendard-Bold";
        border: none;
        min-width: 7em;
        padding: 0.6em;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        background-color: #3182f6;
        color: white;
      `}
    >
      {eventType}
    </div>
  );
}
