/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { Section } from "../../components/common/components";
import dummy from "../../images/detail/dummy.png";
import EventStatusButton from "../../components/common/EventStatusButton";
import ContentTitle from "../../components/common/ContentTitle";
import ContentSubTitle from "../../components/common/ContentSubTitle";
import Map from "../../components/common/Map";
import { Thumb } from "../../components/common/Card";
import ContentCards from "../../components/common/ContentCards";

export default function Detail() {
  useEffect(() => {
    (function (d, s) {
      let j: any,
        e: any = d.getElementsByTagName(s)[0];
      let LivereTower: any;

      if (typeof LivereTower === "function") {
        return;
      }

      j = d.createElement(s);
      j.src = "https://cdn-city.livere.com/js/embed.dist.js";
      j.async = true;

      e.parentNode.insertBefore(j, e);
    })(document, "script");
  }, []);

  return (
    <Section>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          row-gap: 2.3em;
        `}
      >
        <article
          css={css`
            display: flex;
            column-gap: 4.43em;
            box-sizing: border-box;
          `}
        >
          <Thumb thumb={dummy} />
          <div
            css={css`
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: left;
              text-align: left;
              row-gap: 0.7em;
            `}
          >
            <ContentTitle text="과연 누가 우리 학교의 가왕이 될까요?" />
            <ContentSubTitle text="축제 기념 복면 가왕 시리즈" />
            <EventStatusButton isRunning={true} />
            <Map />
          </div>
        </article>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
            row-gap: 2.68em;
          `}
        >
          <ContentTitle text="관련된 더 많은 사진을 보여드릴게요" />
          <div
            css={css`
              display: flex;
              width: 100%;
              column-gap: 2em;
            `}
          >
            <ContentCards thumb={dummy} />
            <ContentCards thumb={dummy} />
            <ContentCards thumb={dummy} />
            <ContentCards thumb={dummy} />
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
            row-gap: 2.3em;
          `}
        >
          <ContentTitle text="상세 설명" />
          <div
            css={css`
              display: flex;
              width: 100%;
              height: 20em;
              column-gap: 2em;
              background-color: #f8f8f8;
              box-sizing: border-box;
              padding: 1.3em;
              border-radius: 0.5em;
            `}
          >
            <span>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
            row-gap: 1em;
          `}
        >
          <ContentTitle text="해당 이벤트에 대해 같이 이야기를 나눠봐요" />
          <div
            css={css`
              display: flex;
              width: 100%;
              height: 20em;
              column-gap: 2em;
              box-sizing: border-box;
              border-radius: 0.5em;
            `}
          >
            <div
              id="lv-container"
              data-id="city"
              data-uid={process.env.REACT_APP_LIVERE_CODE}
              css={css`
                width: 100%;
                margin-bottom: 1em;
              `}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
