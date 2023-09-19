/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function ChatBox() {
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
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        box-sizing: border-box;
      `}
    >
      <span
        css={css`
          font-family: "Pretendard-Bold";
          color: #4e5968;
        `}
      >
        #45618번째 외침
      </span>
      <span
        css={css`
          line-height: 1em;
          color: #4e5968;
        `}
      >
        이번 축제 서비스 폼 미쳤다. 이런 혁신적인 서비스 누가 만들었누..갓수호
      </span>
    </div>
  );
}
