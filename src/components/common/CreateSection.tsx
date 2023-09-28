/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ReactComponent as Plane } from "../../images/emoji/plane.svg";

export default function CreateSection() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 0.7em;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          font-family: "Pretendard-Medium";
          color: #404040;
          column-gap: 0.4em;
          margin-right: auto;
          cursor: pointer;
          border-radius: 0.5em;
          padding: 0.8em;
          transition: 0.4s all;

          &:hover {
            background: rgb(242, 244, 246);
          }
        `}
      >
        <Plane
          css={css`
            width: 1.2em;
          `}
        />
        <span> 글 작성하기</span>
      </div>
      <div
        css={css`
          width: 100%;
          border: solid;
          border-top: 1;
          border-left: 0;
          border-right: 0;
          border-bottom: 0;
          border-color: #e3e3e3;
        `}
      ></div>
    </div>
  );
}