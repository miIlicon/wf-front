/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Title from "./Title";
import rightArrow from "../../images/main/rightArrow.png";
import { eventProps, titleProps } from "../../@types/typs";
import Card from "../common/Card";
import dummy from "../../images/detail/dummy.png";

export default function EventTemplate({ text }: titleProps) {
  return (
    <div
      css={css`
        width: 100%;
        margin-bottom: 3em;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Title text={text} />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;

            column-gap: 0.2em;
            margin-left: auto;
            cursor: pointer;
            padding: 0.7em;
            padding-left: 1.5em;
            border-radius: 8px;
            transition: 0.4s all;
            box-sizing: border-box;

            &:hover {
              background-color: #f8f8f8;
            }
          `}
        >
          <span
            css={css`
              color: #333d4b;
            `}
          >
            더 보러가기
          </span>
          <img
            css={css`
              width: 1.2em;
            `}
            src={rightArrow}
            alt="더 보러가기 아이콘"
          />
        </div>
      </div>
      <div
        css={css`
          margin-top: 1.3em;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 1.8em;
        `}
      >
        <Card
          id={1}
          category={"food-truck"}
          title={"축제 임시데이터"}
          subTitle={"축제 임시데이터"}
          status={true}
          thumb={dummy}
        />
        <Card
          id={1}
          category={"food-truck"}
          title={"축제 임시데이터"}
          subTitle={"축제 임시데이터"}
          status={true}
          thumb={dummy}
        />
        <Card
          id={1}
          category={"food-truck"}
          title={"축제 임시데이터"}
          subTitle={"축제 임시데이터"}
          status={true}
          thumb={dummy}
        />
      </div>
    </div>
  );
}
