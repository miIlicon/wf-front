/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import PageTitle from "../components/common/PageTitle";
import PageSubTitle from "../components/common/PageSubTitle";
import { contentTextProps, VideoProps, VideoListProps } from "../@types/typs";
import { Thumb } from "../components/common/Card";
import API from "../utils/api";

const NameLabel = ({ text }: contentTextProps) => {
  return (
    <label
      css={css`
        width: 8em;
        height: 2em;
        color: #3182f6;
        background-color: rgba(49, 130, 246, 0.16);
        border: none;
        border-radius: 0.3em;
        font-size: 12px;
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;

        @media (max-width: 479px) {
          font-size: 9px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 10px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 11px;
        }
        @media all and (min-width: 1100px) {
          font-size: 12px;
        }

        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {text}
    </label>
  );
};

const VideoCard = ({ title, subTitle, thumb, artist }: VideoProps) => {
  return (
    <div
      css={css`
        text-align: left;
        line-height: 10px;
        transition: 0.4s all;
        cursor: pointer;

        &:hover {
          transform: translateY(-2%);
        }
      `}
    >
      <Thumb thumb={thumb} />
      <div
        css={css`
          margin-top: 17px;
        `}
      >
        <NameLabel text={artist} />
        <p
          css={css`
            font-weight: 700;
            font-style: normal;
            line-height: 1.2em;
            letter-spacing: -0.03em;
            color: #4e5968;
            margin: 0;

            margin-top: 0.45em;
            margin-bottom: 0.45em;

            @media (max-width: 479px) {
              font-size: 16px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 19px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 21px;
            }
            @media all and (min-width: 1100px) {
              font-size: 24px;
            }
          `}
        >
          {title}
        </p>
        <p
          css={css`
            font-weight: 500;
            line-height: 1.2em;
            letter-spacing: -0.03em;
            color: #4e5968;

            @media (max-width: 479px) {
              font-size: 10px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 12px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 14px;
            }
            @media all and (min-width: 1100px) {
              font-size: 16px;
            }

            margin: 0;
            margin-top: 0.45em;
          `}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

const VideoCardList = ({ dataList }: VideoListProps) => {
  return (
    <div
      css={css`
        font-size: 16px;
        width: 65.8em;

        @media all and (max-width: 1100px) {
          width: 100%;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          box-sizing: border-box;
          padding-right: 1em;
          padding-left: 1em;

          display: grid;
          grid-template-columns: 1fr 1fr 1fr;

          @media all and (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
          }

          @media (max-width: 479px) {
            font-size: 10px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 12px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 14px;
          }
          @media all and (min-width: 1100px) {
            font-size: 16px;
          }

          flex-wrap: wrap;
          justify-content: center;
          align-items: center;

          column-gap: 3.5em;
          row-gap: 2.8em;
          margin-bottom: 3em;
        `}
      >
        {dataList.map((data) => (
          <div css={css``}>
            <VideoCard
              title={data.title}
              subTitle={data.subTitle}
              artist={data.artist}
              thumb={data.thumb}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function FestivalVideoPage() {
  const [festivalVideoList, setFestivalVideoList] = useState<any>([]);

  const getFestivalVideo= async () => {
		await API.get(
			"/api/v1/film/list",
			{params: { "page": 0 }}
		)
		.then((res) => {
			setFestivalVideoList(res.data.content);
		})
	};

  useEffect(() => {
		getFestivalVideo();
	}, [])

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2em;
      `}
    >
      <PageTitle text="축제영상" />
      <PageSubTitle text="위드 페스티벌 팀에서 다시 보고 싶거나 혹은 놓친 축제를 다시 연결시켜드려요" />

      <div css={css``}>
        <VideoCardList dataList={festivalVideoList} />
      </div>
    </div>
  );
}
