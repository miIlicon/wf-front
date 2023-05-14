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
              font-size: 19.2px;
              font-family: "Pretendard-ExtraBold";

              @media (max-width: 479px) {
                font-size: 15px;
              }
              @media all and (min-width: 480px) and (max-width: 767px) {
                font-size: 16px;
              }
              @media all and (min-width: 768px) and (max-width: 1099px) {
                font-size: 17px;
              }
              @media all and (min-width: 1100px) {
                font-size: 18px;
              }
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
              자세히 보러가기
            </span>
            <BannerArrow
              css={css`
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
                width: 0.9em;
              `}
            />
          </div>
        </div>
        <Rocket
          css={css`
            width: 3.3em;
            height: auto;

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
      </div>
    </div>
  );
}
