/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import API from "../../utils/api";
import axios from "axios";
import { chatBoxProps } from "../../@types/typs";

export default function ChatBox() {
  const [currentLength, setCurrentLength] = useState(0);
  const [value, setValue] = useState("");
  const form = new FormData();

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (event.target && currentLength < 200) {
      setCurrentLength(event.target.value.length);
      setValue(event.target.value);
    }
  }

  function handleClick() {
    form.append("content", value);
    form.append("contact", "gentlemonster77@likelion.org");
    axios
      .post("/api/v2/bambooforest", form, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        setValue("");
      });
  }

  return (
    <div
      css={css`
        width: 100%;
        background-color: #ffffff;
        border-radius: 1em;
        height: 10em;
        margin-top: 3em;

        display: flex;
        flex-direction: column;
        row-gap: 1em;
        padding: 1.5em 2em 1.5em 2em;
        box-sizing: border-box;
      `}
    >
      <textarea
        placeholder="메세지를 입력해주세요&#10;대나무 숲 취지에 맞지 않는 내용은 삭제 및 IP 제한이 있을 수 있습니다."
        maxLength={200}
        onChange={handleChange}
        css={css`
          border: none;
          width: 100%;
          height: 3.5em;
          border: solid;
          border-left: 0;
          border-right: 0;
          border-top: 0;
          resize: none;
          border-color: rgba(192, 192, 192, 0.5);
          font-family: "Pretendard-Regular";
          line-height: 1.4em;
          font-size: 16px;
          padding-bottom: 1em;

          &:focus {
            outline: none;
          }
        `}
      />
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <button
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 6em;
            height: 2.3em;
            border-radius: 5px;
            font-size: 16px;
            font-family: "Pretendard-Bold";
            border: none;
            color: white;
            background-color: #3182f6;
            cursor: pointer;
          `}
          onClick={handleClick}
        >
          등록
        </button>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            column-gap: 0.3em;
            span {
              font-family: "Pretendard-Regular";
            }
          `}
        >
          <span>{currentLength}</span>
          <span>/</span>
          <span
            css={css`
              color: #c6c6c6;
            `}
          >
            200
          </span>
        </div>
      </div>
    </div>
  );
}
