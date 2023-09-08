/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { TextProps, QandAProps } from "../../@types/typs";
import QandAData from "../../data/QandA.json";

const QuestionBox = ({ text, onClick } : TextProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        height: 103px;
        border-radius: 8px;
        background-color: #FFFFFF;
        font-family: "Pretendard-Regular";
        cursor: pointer;
        &:hover {
          background-color: #f1f1f6;
        }
      `}
      onClick={onClick}
    >
      <p
        css={css`
          font-size: 25px;
          font-weight: 700;
          color: #4E5968;
          opacity: 0.6;
          padding: 36px;
        `}
      >
      Q
      </p>
      <p
        css={css`
          font-size: 20px;
        `}
      >
        {text}
      </p>
    </div>
  );
}

const AnswerBox = ({ text } : TextProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        height: 103px;
        border-radius: 8px;
        background-color: #E8F3FF;
        font-family: "Pretendard-Regular";
      `}
    >
      <p
        css={css`
          font-size: 25px;
          font-weight: 700;
          color: #1B64DA;
          padding: 36px;
        `}
      >
        A
      </p>
      <p
        css={css`
          font-size: 20px;
        `}
      >
        {text}
      </p>
    </div>
  );
}

const QandABox = ({ Q, A } : QandAProps ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickBox = () => {
    setIsOpen(!(isOpen));
  }

  return (
    <div>
      <QuestionBox text={Q} onClick={onClickBox} />
      {isOpen && <AnswerBox text={A} />}
    </div>
  );
}

export default function QandA() {
  return (
    <div
      css={css`
        padding: 35px 150px;
      `}
    >
      {QandAData.map((item) =>
        <QandABox Q={item.Q} A={item.A} />
      )}
    </div>
  );
}