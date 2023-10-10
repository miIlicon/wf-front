/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { ReactComponent as Back } from "../../images/detail/back.svg";
import { ReactComponent as Delete } from "../../images/detail/delete.svg";

export default function DetailSectionBtn(props: any) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-family: "Pretendard-Medium";
        color: #404040;
        column-gap: 0.4em;
        cursor: pointer;
        border-radius: 0.5em;
        padding-left: 0.8em;
        padding-right: 0.8em;
        padding-top: 0.65em;
        padding-bottom: 0.65em;
        transition: 0.4s all;

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

        &:hover {
          background: rgb(242, 244, 246);
        }
      `}
      onClick={props.onClick}
    >
      {props.text === "뒤로 가기" && (
        <Back
          css={css`
            width: 1.5em;
            height: 1.5em;
          `}
        />
      )}
      {props.text === "게시글 삭제" && (
        <Delete
          css={css`
            width: 1.4em;
            height: 1.4em;
          `}
        />
      )}
      <span>{props.text}</span>
    </div>
  );
}
