/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { chatBoxProps } from "../../@types/typs";

export default function ChatBox({ id, text }: chatBoxProps) {
  return (
    <div
      css={css`
        width: auto;
        background-color: #f0f1f4;
        border-radius: 0.5em;

        display: flex;
        flex-direction: column;
        row-gap: 0.6em;
        padding: 1.2em;
        padding-top: 1.35em;
        padding-bottom: 1.35em;
        box-sizing: border-box;
      `}
    >
      <span
        css={css`
          font-family: "Pretendard-Bold";
          color: #4e5968;
        `}
      >
        #{id}번째 외침
      </span>
      <span
        css={css`
          line-height: 1.5em;
          color: #4e5968;
          white-space: pre;
        `}
      >
        {text}
      </span>
    </div>
  );
}
