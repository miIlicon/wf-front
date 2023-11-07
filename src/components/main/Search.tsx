/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import search from "../../images/main/search.png";
import EventStatusButton from "../common/EventStatusButton";
import {
  SearchResultProps,
  contentTextProps,
  SearchModalProps,
} from "../../@types/typs";
import axios from "axios";
import API, { CACHE_TIME, STALE_TIME } from "../../utils/api";
import { useQuery } from "react-query";

const Result = ({
  id,
  title,
  subTitle,
  mainFilePath,
  status,
  onClick,
}: SearchResultProps) => {
  return (
    <div
      css={css`
        font-family: "Pretendard-Medium";
        display: flex;
        color: #4e5968;
        border-radius: 13px;
        padding: 13px 0;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      `}
      onClick={onClick}
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
};

const ResultModal = ({ children, path }: SearchModalProps) => {
  return (
    <div
      css={css`
        width: calc(100% - 60px);
        max-height: 20em;
        position: absolute;
        top: 4.5em;
        z-index: 9;
        border-radius: 13px;
        overflow-y: scroll;
        background-color: ${path === "/category" ? "#FFFFFF" : "#ebecf0"};
        padding: 4px 30px;
      `}
    >
      {children}
    </div>
  );
};

const RecentNotice = ({ text }: contentTextProps) => {
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
};

export default function Search() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  let notice = null;
  const [keyword, setKeyword] = useState<string>("");
  const [program, setProgram] = useState<SearchResultProps[]>([]);
  const [booth, setBooth] = useState<SearchResultProps[]>([]);
  const [result, setResult] = useState<any[]>([]);

  const getResult = async () => {
    await API.get(`/api/v2/program/search`, {
      params: { keyword: keyword },
    }).then((res) => {
      setProgram(res.data);
    });

    await API.get(`/api/v2/booth/search`, {
      params: { keyword: keyword },
    }).then((res) => {
      setBooth(res.data);
    });
  };

  const getNotice = () => {
    return API.get(`/api/v2/guide/list`, {
      params: { page: 0, size: 1 },
    });
  };

  const noticeData = useQuery({
    queryKey: ["notice"],
    queryFn: getNotice,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  if (!noticeData.isLoading) {
    notice = noticeData.data?.data.guideResList[0].content;
  }

  const createResult = () => {
    const arr: any[] = [];
    program.map((data) =>
      arr.push(
        <Result
          id={data.id}
          title={data.title}
          subTitle={data.subTitle}
          status={data.status}
          mainFilePath={data.mainFilePath}
          onClick={() => navigate(`/detail?category=program&id=${data.id}`)}
        />
      )
    );
    booth.map((data) =>
      arr.push(
        <Result
          id={data.id}
          title={data.title}
          subTitle={data.subTitle}
          status={data.status}
          mainFilePath={data.mainFilePath}
          onClick={() => navigate(`/detail?category=booth&id=${data.id}`)}
        />
      )
    );
    return arr;
  };

  useEffect(() => {
    if (keyword.length > 0) {
      getResult();
    }
  }, [keyword]);

  useEffect(() => {
    setResult(createResult());
  }, [program, booth]);

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
          border-radius: 0.8em;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.3em;
          box-sizing: border-box;

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
        {keyword.length > 0 && (
          <ResultModal path={path}>
            {result.length > 0 ? (
              result
            ) : (
              <p
                css={css`
                  font-family: "Pretendard-Medium";
                  text-align: center;
                  color: #4e5968;
                `}
              >
                일치하는 검색 결과가 없어요
              </p>
            )}
          </ResultModal>
        )}
      </div>
      {path === "/" && notice ? (
        <RecentNotice text={notice} />
      ) : (
        <RecentNotice text={"아직 등록된 공지사항이 없어요"} />
      )}
    </div>
  );
}
