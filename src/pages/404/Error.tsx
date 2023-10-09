/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { ReactComponent as NotFound } from "../../images/emoji/not-found.svg";
import { useNavigate } from "react-router-dom";

export default function Error() {
  return (
    <div
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "Pretendard-Regular";
        color: rgb(141, 150, 161);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 0.5em;
        font-size: 14px;

        span {
          display: block;
          text-align: center;
        }
      `}
    >
      <NotFound
        css={css`
          margin-bottom: 0.5em;
        `}
      />
      <div
        css={css`
          font-size: 26px;
          font-family: "Pretendard-Bold";
          color: rgb(60, 70, 81);
          margin-bottom: 0.3em;
        `}
      >
        페이지를 찾을 수 없어요
      </div>
      <span>웁스, 잘못된 접근을 하신 것 같아요</span>
      <span>
        요청하신 페이지의 접근 권한 또는 페이지 주소를 다시 한번 확인해주세요!
      </span>
      <button
        css={css`
          margin-top: 1em;
          width: 12em;
          height: 2.7em;
          border-radius: 0.3em;
          background-color: #3182f6;
          border: none;
          color: white;
          font-size: 14px;
          font-family: "Pretendard-Bold";
          cursor: pointer;
        `}
        onClick={() => (window.location.href = "/")}
      >
        홈으로 돌아가기
      </button>
      <span
        css={css`
          margin-top: 0.5em;
          color: rgb(205, 210, 214);
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
        `}
      >
        404 Not Found
      </span>
    </div>
  );
}
