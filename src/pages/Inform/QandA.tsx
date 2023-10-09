/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { TextProps, QandAProps } from "../../@types/typs";
import QandAData from "../../data/QandA.json";

const QuestionBox = ({ text, onClick }: TextProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        border-radius: 8px;
        background-color: #ffffff;
        font-family: "Pretendard-Regular";
        cursor: pointer;
        &:hover {
          background-color: #f1f1f6;
        }

        @media (max-width: 479px) {
          height: 73px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          height: 83px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          height: 93px;
        }
        @media all and (min-width: 1100px) {
          height: 103px;
        }
      `}
      onClick={onClick}
    >
      <p
        css={css`
          font-weight: 700;
          color: #4e5968;
          opacity: 0.6;

          @media (max-width: 479px) {
            font-size: 18px;
            padding: 24px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 21px;
            padding: 28px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 23px;
            padding: 32px;
          }
          @media all and (min-width: 1100px) {
            font-size: 25px;
            padding: 36px;
          }
        `}
      >
        Q
      </p>
      <p
        css={css`
          text-align: left;
          word-break: keep-all;

          @media (max-width: 479px) {
            font-size: 14px;
            padding-right: 24px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 16px;
            padding-right: 28px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 18px;
            padding-right: 32px;
          }
          @media all and (min-width: 1100px) {
            font-size: 20px;
            padding-right: 36px;
          }
        `}
      >
        {text}
      </p>
    </div>
  );
};

const AnswerBox = ({ text }: TextProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        border-radius: 8px;
        background-color: #e8f3ff;
        font-family: "Pretendard-Regular";

        @media (max-width: 479px) {
          height: 73px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          height: 83px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          height: 93px;
        }
        @media all and (min-width: 1100px) {
          height: 103px;
        }
      `}
    >
      <p
        css={css`
          font-weight: 700;
          color: #1b64da;

          @media (max-width: 479px) {
            font-size: 18px;
            padding: 24px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 21px;
            padding: 28px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 23px;
            padding: 32px;
          }
          @media all and (min-width: 1100px) {
            font-size: 25px;
            padding: 36px;
          }
        `}
      >
        A
      </p>
      <p
        css={css`
          text-align: left;
          word-break: keep-all;

          @media (max-width: 479px) {
            font-size: 14px;
            padding-right: 24px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 16px;
            padding-right: 28px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 18px;
            padding-right: 32px;
          }
          @media all and (min-width: 1100px) {
            font-size: 20px;
            padding-right: 36px;
          }
        `}
      >
        {text}
      </p>
    </div>
  );
};

const QandABox = ({ Q, A }: QandAProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <QuestionBox text={Q} onClick={onClickBox} />
      {isOpen && <AnswerBox text={A} />}
    </div>
  );
};

export default function QandA() {
  return (
    <div>
      {QandAData.map((item) => (
        <QandABox Q={item.Q} A={item.A} />
      ))}
    </div>
  );
}
