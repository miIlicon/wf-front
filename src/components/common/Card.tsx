/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import EventStatusButton from "./EventStatusButton";
import { CardProps } from "../../@types/typs";

export const Thumb = ({ thumb, isRunning }: CardProps) => {
  return (
    <img
      css={css`
        width: 301px;
        height: 427px;
        border-radius: 11px;
        filter: ${isRunning ? "grayscale(0)" : "grayscale(100%)"};
      `}
      src={thumb}
      alt=""
    />
  );
};

export default function Card({ title, subTitle, thumb, isRunning }: CardProps) {
  return (
    <div
      css={css`
        text-align: left;
        line-height: 10px;
      `}
    >
      <Thumb thumb={thumb} isRunning={isRunning}/>
      <div
        css={css`
          margin-top: 17px;
        `}
      >
        <EventStatusButton isRunning={isRunning ? true : false} />
        <p
          css={css`
            font-size: 24px;
            font-weight: 700;
            font-style: normal;
            line-height: 29px;
            letter-spacing: -0.03em;
            color: #4e5968;

            margin: 11px 0;
          `}
        >
          {title}
        </p>
        <p
          css={css`
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            line-height: 19px;
            letter-spacing: -0.03em;
            color: #4e5968;

            margin: 0;
          `}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
}
