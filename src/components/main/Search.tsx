/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import search from "../../images/main/search.png";

export default function Search() {
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
          width: 100%;
          height: 4em;
          background-color: #ebecf0;
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
            font-size: 17px;
            padding-left: 0.6em;
            letter-spacing: -0.03em;
            font-family: "Pretendard-Regular";

            &:focus {
              outline: none;
            }
          `}
          placeholder="우리 학교에서 진행중인 축제 키워드를 입력해보세요 👀"
        />
      </div>
      <div
        css={css`
          display: flex;
          column-gap: 0.3em;
          span {
            font-family: "Pretendard-Regular";
            font-color: #4e5968;
            letter-spacing: -0.03em;
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
        <span>금일 우천으로 인해 가수 초청 공연은 진행되지 않습니다.</span>
      </div>
    </div>
  );
}
