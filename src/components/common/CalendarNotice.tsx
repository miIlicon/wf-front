/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import moment from "moment";
import React from "react";

export default function CalendarNotice() {
  const currentTime = moment();
  const month = currentTime.month() + 1;
  const day = currentTime.day() + 1;

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 1em;
        margin-top: 2em;
        border: 0.11em solid;
        border-color: rgba(192, 192, 192, 0.2);
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
        padding-top: 3em;
      `}
    >
      <img
        src={`https://www.kakaocorp.com/page/calendar/light/ico_date${day}.gif`}
        alt="현재 캘린더 이미지"
        css={css`
          width: 6em;

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
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          font-family: "Pretendard-ExtraBold";
          color: #404040;
          font-size: 31px;
          line-height: 1.4em;
          text-align: left;

          @media (max-width: 479px) {
            font-size: 22px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 25px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 28px;
          }
          @media all and (min-width: 1100px) {
            font-size: 31px;
          }

          span {
            white-space: pre;
          }
        `}
      >
        <span>
          {month}월 {day}일 위드 페스티벌에서
        </span>
        <span>전해드리는 축제 소식입니다</span>
      </div>
    </div>
  );
}
