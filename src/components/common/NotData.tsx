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
      `}
    >
      <span>아직 등록된 정보가 없어요</span>
    </div>
  );
}
