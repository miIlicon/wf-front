/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Title from "./Title";
import SlideCard from "./SlideCard";
import ViewTimeTable from "./ViewTimeTable";

export default function CurrentEvent() {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        margin-top: 3em;
      `}
    >
      <Title text="현재 진행되고 있는 이벤트" used="main" />
      <SlideCard eventName="스테이씨" eventType="축제 초청 가수" />
      <SlideCard eventName="귀신의 집" eventType="공식 축제 이벤트" />
      <SlideCard eventName="람브를 찾아라" eventType="공식 축제 이벤트" />
      <ViewTimeTable />
    </div>
  );
}
