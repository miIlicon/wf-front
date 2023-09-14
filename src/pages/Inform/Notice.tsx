/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { NoticeProps, ProfileProps, contentTextProps, ImageProps } from "../../@types/typs";
import profile from "../../data/profile.json";

const Icon = ({ src } : ImageProps) => {
  return (
    <img
      css={css`
        background-color: #4E5968;
        border-radius: 8px;

        @media (max-width: 479px) {
          height: 45px;
          margin-right: 10px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          height: 70px;
          margin-right: 13px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          height: 75px;
          margin-right: 16px;
        }
        @media all and (min-width: 1100px) {
          height: 90px;
          margin-right: 19px;
        }
      `}
      src={src}
      alt=""
    />
  );
}

const Profile = ({ name, date } : ProfileProps) => {
  return (
    <div>
      <p
        css={css`
          font-weight: 700;
          margin: 0;

          @media (max-width: 479px) {
            font-size: 14px;
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
        {name}
      </p>
      <div
        css={css`
          opacity: 0.6;

          @media (max-width: 479px) {
            font-size: 9px;
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
        <p
          css={css`
            @media (max-width: 479px) {
              margin: 4px 0;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              margin: 5px 0;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              margin: 7px 0;
            }
            @media all and (min-width: 1100px) {
              margin: 9px 0;
            }
          `}
        >
          서비스 운영자
        </p>
        <p
          css={css`
            margin: 0;
          `}
        >
          {date}
        </p>
      </div>
    </div>
  );
}

const Content = ({ text }: contentTextProps) => {
  return (
    <p
      css={css`
        word-break: keep-all;

        @media (max-width: 479px) {
          font-size: 13px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 17px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 20px;
        }
        @media all and (min-width: 1100px) {
          font-size: 21px;
        }
      `}
    >
      {text}
    </p>
  );
}

const NoticeBox = ({ icon, name, date, content } : NoticeProps) => {
  return (
    <div
      css={css`
        display: flex;
        font-family: "Pretendard-Medium";
        color: #4E5968;
        margin: 27px 0;
      `}
    >
      <Icon src={icon} />
      <div>
        <Profile name={name} date={date} />
        <Content text={content} />
      </div>
    </div>
  );
}

const InputBox = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: "Pretendard-Medium";
        margin-bottom: 50px;
        
        @media (max-width: 479px) {
          font-size: 9px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 11px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 13px;
        }
        @media all and (min-width: 1100px) {
          font-size: 15px;
        }
      `}
    >
      <input
        css={css`
          width: 70%;
          border: solid 2px #4E5968;
          border-radius: 8px;
          outline: none;
          padding: 5px 15px;

          @media (max-width: 479px) {
            font-size: 8px;
            height: 25px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 11px;
            height: 30px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 13px;
            height: 35px;
          }
          @media all and (min-width: 1100px) {
            font-size: 15px;
            height: 40px;
          }
        `}
        placeholder="공지사항을 입력해주세요."
        type="text"
      />
      <button
        css={css`
          height: 50px;
          font-weight: 700;
          background-color: #3182F6;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          cursor: pointer;

          @media (max-width: 479px) {
            height: 35px;
            font-size: 8px;
            padding: 0 8px;
            margin-left: 5px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            height: 40px;
            font-size: 11px;
            padding: 0 17px;
            margin-left: 8px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            height: 45px;
            font-size: 13px;
            padding: 0 20px;
            margin-left: 10px;
          }
          @media all and (min-width: 1100px) {
            height: 50px;
            font-size: 15px;
            padding: 0 22px;
            margin-left: 10px;
          }
        `}
      >
        등록
      </button>
    </div>
  );
}


export default function Notice() {
  const icons = JSON.parse(JSON.stringify(profile));
  const isAdmin = true;
  const [noticeData, setNoticeData] = useState([
    {
      name: "Horang",
      date: "2023.09.08 17:30",
      content: "금일 타코야끼 푸드트럭은 재고소진으로 인해 일찍 마감을 합니다!"
    },
    {
      name: "Judy",
      date: "2023.09.08 17:30",
      content: "금일 우천으로 인해 가수 초청 공연은 취소되었습니다."
    },
    {
      name: "Horang",
      date: "2023.09.08 17:30",
      content: "금일 우천으로 인해 가수 초청 공연은 취소되었습니다."
    },
    {
      name: "Judy",
      date: "2023.09.08 17:30",
      content: "금일 우천으로 인해 가수 초청 공연은 취소되었습니다."
    }
  ])

  return (
    <div
      css={css`
        font-family: "Pretendard-Medium";
        padding: 0 15%;
      `}
    >
      {isAdmin && <InputBox />}
      {noticeData.map((data) => 
        <NoticeBox icon={icons[data.name]} name={data.name} date={data.date} content={data.content} />
      )}
    </div>
  );
}