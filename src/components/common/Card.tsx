/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import EventStatusButton from "./EventStatusButton";
import { CardProps } from "../../@types/typs";

export const Thumb = ({ thumb }: CardProps) => {
  return (
    <img
      css={css`
        width: 18em;
        height: auto;
        border-radius: 0.5em;
      `}
      src={thumb}
      alt=""
    />
  );
};

export default function Card({ title, subTitle, thumb }: CardProps) {
  return (
    <div
      css={css`
        text-align: left;
        line-height: 10px;
      `}
    >
      <Thumb thumb={thumb} />
      <div
        css={css`
          margin-top: 10px;
        `}
      >
        <EventStatusButton isRunning={true} />
        <p
          css={css`
            font-size: 16px;
            font-weight: 700;
          `}
        >
          {title}
        </p>
        <p
          css={css`
            font-size: 11px;
          `}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
}
