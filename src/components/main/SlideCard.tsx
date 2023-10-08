/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { eventProps } from "../../@types/typs";
import CurrentEventType from "./CurrentEventType";

export default function SlideCard({ eventName, eventType }: eventProps) {
  return (
    <div
      css={css`
        width: 100%;
        height: 6.56em;
        background-color: #f8f8f8;
        border-radius: 13px;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
        box-sizing: border-box;

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
      <span
        css={css`
          color: black;
          font-family: "Pretendard-Medium";
          font-size: 20px;
          margin-right: auto;

          @media (max-width: 479px) {
            font-size: 14px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 16px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 18px;
          }
          @media all and (min-width: 1100px) {
            font-size: 20px;
          }
        `}
      >
        {eventName}
      </span>
      <CurrentEventType eventType={eventType} />
    </div>
  );
}
