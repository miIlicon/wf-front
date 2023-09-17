/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { eventProps } from "../../@types/typs";
import CurrentEventType from "./CurrentEventType";

export default function ViewTimeTable() {
  return (
    <div
      css={css`
        width: 100%;
        height: 6.56em;
        background-color: #3182f6;
        border-radius: 13px;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
        box-sizing: border-box;
        margin-bottom: 3em;
      `}
    >
      <span
        css={css`
          color: white;
          font-family: "Pretendard-Bold";
          font-size: 20px;
          margin-right: auto;
        `}
      >
        전체 타임 테이블 자세히 보러가기
      </span>
    </div>
  );
}
