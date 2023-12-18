/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import axios from "axios";
import Title from "./Title";
import rightArrow from "../../images/main/rightArrow.png";
import { EventTemplateProps } from "../../@types/typs";
import Card from "../common/Card";
import { useNavigate } from "react-router-dom";
import NotData from "../common/NotData";
import API, { CACHE_TIME, STALE_TIME } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";

export default function EventTemplate({ text, type }: EventTemplateProps) {
  const navigate = useNavigate();
  // const [dataList, setDataList] = useState<any>([]);
  const category = type === "EVENT" ? "program" : "booth";
  let dataList = null;

  const { isLoading, error, data } = useQuery({
    queryKey: [category, type],
    queryFn: () =>
      API.get(`/api/v2/${category}/list`, {
        params: { page: 0, type: type, size: 3 },
      }),
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
  });

  if (!isLoading) {
    if (type === "EVENT") {
      dataList = data?.data.programList;
    } else {
      dataList = data?.data.boothResList;
    }
  }

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
          onClick={() => {
            navigate(`/${category}`, { state: { menu: type } });
          }}
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
          overflow: auto;

          &::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {dataList ? (
          dataList.map((data: any) => (
            <Card
              id={data.id}
              key={data.id}
              category={category}
              title={data.title}
              subTitle={data.subTitle}
              status={data.operateStatus}
              thumb={data.mainFilePath}
            />
          ))
        ) : (
          <NotData />
        )}
      </div>
    </div>
  );
}
