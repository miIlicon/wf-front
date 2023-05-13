/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ReactComponent as BannerArrow } from "../../images/bannerArrow.svg";
import { ReactComponent as Rocket } from "../../images/rocket.svg";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div
      css={css`
        width: 100%;
        height: 7em;
        border: solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: black;
        color: white;
        letter-spacing: -0.03em;
      `}
    >
      <div
        css={css`
          display: flex;
          column-gap: 1em;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 0.6em;
          `}
        >
          <span
            css={css`
              display: block;
              font-size: 1.2em;
              font-family: "Pretendard-ExtraBold";
            `}
          >
            지금 진행중인 축제를 보러가볼까요?
          </span>
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: left;
              align-items: center;
              transition: 0.4s all;
              cursor: pointer;

              &:hover {
                opacity: 80%;
              }
            `}
            onClick={() => navigate("/detail")}
          >
            <span
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              자세히 보러가기
            </span>
            <BannerArrow
              css={css`
                width: 0.9em;
              `}
            />
          </div>
        </div>
        <Rocket
          css={css`
            width: 3.3em;
            height: auto;
          `}
        />
      </div>
    </div>
  );
}
