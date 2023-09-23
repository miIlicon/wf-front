/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import search from "../../images/main/search.png";
import EventStatusButton from "../common/EventStatusButton";
import { SearchResultProps, contentTextProps } from "../../@types/typs";
import axios from "axios";
import API from "../../utils/api";

interface SearchModalProps {
  path: string;
  dataList: SearchResultProps[];
}

const Result = ({ title, subTitle, mainFilePath, status } : SearchResultProps) => {
  return (
    <div
      css={css`
        font-family: "Pretendard-Medium";
        display: flex;
        color: #4E5968;
        margin: 26px 0;
        cursor: pointer;
      `}
    >
      <img
        css={css`
          border-radius: 4px;

          @media (max-width: 479px) {
            height: 70px;
            margin-right: 15px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            height: 80px;
            margin-right: 20px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            height: 90px;
            margin-right: 25px;
          }
          @media all and (min-width: 1100px) {
            height: 100px;
            margin-right: 30px;
          }
        `}
        src={mainFilePath}
        alt=""
      />
      <div
        css={css`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `}
      >
        <p
          css={css`
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin: 0;

            @media (max-width: 479px) {
              font-size: 16px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 20px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 22px;
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
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

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
        `}
        >
          {subTitle}
        </p>
        <EventStatusButton status={status} />
      </div>
    </div> 
  );
}

const ResultModal = ({ dataList, path } : SearchModalProps) => {
  return (
    <div
      css={css`
        width: calc(100% - 60px);
        position: absolute;
        top: 4.5em;
        z-index: 9;
        border-radius: 13px;
        overflow-y: scroll;
        background-color: ${path === "/category" ? "#FFFFFF" : "#ebecf0"};
        padding: 4px 30px;
      `}
    >
      { dataList.length > 0
        ? dataList.map((data) => <Result title={data.title} subTitle={data.subTitle} status={data.status} mainFilePath={data.mainFilePath} />)
        : <p
            css={css`
              font-family: "Pretendard-Medium";
              text-align: center;
              color: #4E5968;
            `}
          >
            일치하는 검색 결과가 없어요
          </p>
      }
      
    </div>
  );
}

const RecentNotice = ({ text } : contentTextProps) => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 0.3em;
        span {
          font-family: "Pretendard-Regular";
          color: #4e5968;
          letter-spacing: -0.03em;

          @media (max-width: 479px) {
            font-size: 10.5px;
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
        }
      `}
    >
      <span
        css={css`
          font-family: "Pretendard-Medium" !important;
        `}
      >
        [최근 등록된 공지사항]
      </span>
      <span>{text}</span>
    </div>
  );
}

export default function Search() {
  const path = useLocation().pathname;
  const [notice, setNotice] = useState<string>("금일 우천으로 인해 가수 초청 공연은 진행되지 않습니다.");
  const [keyword, setKeyword] = useState<string>("");
  const [result, setResult] = useState<SearchResultProps[]>([
    {
      title: "임시 데이터",
      subTitle: "임시 데이터입니다",
      status: true,
      mainFilePath: "data:image/jpeg;base64,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"
    },
    {
      title: "임시 데이터",
      subTitle: "임시 데이터입니다",
      status: true,
      mainFilePath: "data:image/jpeg;base64,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"
    }
  ]);

  const getResult = async () => {
		await axios.get(
			`/api/v2/program/search`,
			{params: { "keyword": keyword }}
		)
		.then((res) => {
			setResult(res.data.content);
		})

    await axios.get(
			`/api/v2/program/booth`,
			{params: { "keyword": keyword }}
		)
		.then((res) => {
			setResult([...result, res.data.content]);
		})
	};

  useEffect(() => {
    if (keyword.length) {
      getResult();
    }
  }, [keyword]);

  return (
    <div
      className="searchBar"
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        width: 100%;
      `}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          height: 4em;
          background-color: ${path === "/category" ? "#FFFFFF" : "#ebecf0"};
          border-radius: 13px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.3em;
          box-sizing: border-box;
        `}
      >
        <img
          src={search}
          alt="검색을 위한 돋보기 아이콘"
          css={css`
            width: 1.6em;
          `}
        />
        <input
          css={css`
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            padding-left: 0.6em;
            letter-spacing: -0.03em;
            font-family: "Pretendard-Regular";

            &:focus {
              outline: none;
            }

            @media (max-width: 479px) {
              font-size: 13px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 15px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 16px;
            }
            @media all and (min-width: 1100px) {
              font-size: 17px;
            }
          `}
          placeholder="우리 학교에서 진행중인 축제 키워드를 입력해보세요 👀"
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
        { keyword.length > 0 && <ResultModal dataList={result} path={path} /> }
      </div>
      { path === "/" && <RecentNotice text={notice} /> }
    </div>
  );
}
