/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function ChatBox() {
  return (
    <div
      css={css`
        width: 100%;
        background-color: #ffffff;
        border-radius: 18px;
        height: 12em;
        margin-top: 3em;

        display: flex;
        padding: 1.2em 1.8em 1.2em 1.8em;
        box-sizing: border-box;
      `}
    >
      <textarea
        placeholder="메세지를 입력해주세요&#10;대나무 숲 취지에 맞지 않는 내용은 삭제 및 IP 제한이 있을 수 있습니다."
        css={css`
          border: none;
          width: 100%;
          font-family: "Pretendard-Regular";
          line-height: 1.4em;

          &:focus {
            outline: none;
          }
        `}
      />
    </div>
  );
}
