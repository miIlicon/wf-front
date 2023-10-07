/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import thinking from "../../images/emoji/thinking.png";

export default function NotData() {
  return (
    <div
      css={css`
        padding-top: 0.5em;
        font-family: "Pretendard-Regular";
        color: #8d96a1;

        display: flex;
        align-items: center;
        column-gap: 0.3em;
        white-space: pre;

        @media (max-width: 479px) {
          font-size: 13px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 14px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 15px;
        }
        @media all and (min-width: 1100px) {
          font-size: 16px;
        }
      `}
    >
      <span>아직 등록된 정보가 없어요</span>
    </div>
  );
}
