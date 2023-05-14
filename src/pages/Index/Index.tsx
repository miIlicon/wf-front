/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Section } from "../../components/common/components";
import location from "../../images/location.png";
import { MainTitle } from "../../components/main/Main";
import artistData from "../../data/artist.json";
import { ReactComponent as Arrow } from "../../images/artistArrow.svg";

export default function Index() {
  console.log(artistData);
  const date = new Date();
  const [artist, setArtist] = useState("");

  useEffect(() => {
    artistData.map((item) => {
      const festivalDate = new Date(item.date);
      if (date.getFullYear() === festivalDate.getFullYear()) {
        if (date.getMonth() === festivalDate.getMonth()) {
          if (date.getDay() === festivalDate.getDay()) {
            setArtist(item.name);
          }
        }
      }
    });
  }, []);

  return (
    <Section>
      <article
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          row-gap: 2em;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: 1em;

            .guide {
              font-size: 15px;
              display: block;
              font-family: "Pretendard-Bold";
              letter-spacing: -0.03em;

              color: #4e5968;
              background-color: rgba(49, 130, 246, 0.16);
              border: none;
              border-radius: 0.5em;
              padding-top: 1em;
              padding-bottom: 1em;
              padding-left: 1.5em;
              padding-right: 1.5em;

              display: flex;
              justify-content: center;
              align-items: center;

              @media (max-width: 479px) {
                font-size: 11px;
              }
              @media all and (min-width: 480px) and (max-width: 767px) {
                font-size: 12px;
              }
              @media all and (min-width: 768px) and (max-width: 1099px) {
                font-size: 14px;
              }
              @media all and (min-width: 1100px) {
                font-size: 15px;
              }
            }
          `}
        >
          <div
            css={css`
              font-family: "Pretendard-Regular";
              letter-spacing: -0.03em;
              font-size: 14px;

              display: flex;
              justify-content: center;
              align-items: center;
              background-color: white;

              margin-left: auto;
              cursor: pointer;
              transition: 0.4s all;

              &:hover {
                opacity: 80%;
              }
            `}
          >
            <span
              css={css`
                color: #1b64da;

                @media (max-width: 479px) {
                  font-size: 11px;
                }
                @media all and (min-width: 480px) and (max-width: 767px) {
                  font-size: 12px;
                }
                @media all and (min-width: 768px) and (max-width: 1099px) {
                  font-size: 14px;
                }
                @media all and (min-width: 1100px) {
                  font-size: 15px;
                }
              `}
            >
              공연 정보 더 보러가기
            </span>
            <Arrow
              css={css`
                width: 1em;
                height: auto;

                @media (max-width: 479px) {
                  font-size: 10px;
                }
                @media all and (min-width: 480px) and (max-width: 767px) {
                  font-size: 11px;
                }
                @media all and (min-width: 768px) and (max-width: 1099px) {
                  font-size: 13px;
                }
                @media all and (min-width: 1100px) {
                  font-size: 14px;
                }
              `}
            />
          </div>
          {artist && (
            <div className="guide">
              오늘 우리 학교에
              <span
                css={css`
                  color: #1b64da;
                  margin-left: 0.2em;
                  margin-right: 0.2em;

                  @media (max-width: 479px) {
                    font-size: 11px;
                  }
                  @media all and (min-width: 480px) and (max-width: 767px) {
                    font-size: 12px;
                  }
                  @media all and (min-width: 768px) and (max-width: 1099px) {
                    font-size: 14px;
                  }
                  @media all and (min-width: 1100px) {
                    font-size: 15px;
                  }
                `}
              >
                {artist}
              </span>
              가 방문해요
            </div>
          )}
          {!artist && (
            <div className="guide">
              <span
                css={css`
                  color: #1b64da;
                  margin-left: 0.2em;
                  margin-right: 0.2em;
                `}
              >
                오늘은 아쉽게도 학교 축제에 참가하는 가수가 없어요
              </span>
            </div>
          )}
          <div className="guide" css={css``}>
            위드 페스티벌 서비스를 현재{" "}
            <span
              css={css`
                color: #1b64da;
                margin-left: 0.2em;
                margin-right: 0.2em;
              `}
            >
              30
            </span>
            분이 이용해주셨어요
          </div>
        </div>
        <img
          src={location}
          alt="축제 위치 한 눈에 보기"
          css={css`
            width: 100%;
            height: auto;
            filter: drop-shadow(10px 10px 10px rgb(0, 0, 0, 0.16));
          `}
        />
      </article>
    </Section>
  );
}
