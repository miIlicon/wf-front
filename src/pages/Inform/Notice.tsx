/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { NoticeProps, ProfileProps, contentTextProps, ImageProps } from "../../@types/typs";
import profile from "../../data/profile.json";

const Icon = ({ src } : ImageProps) => {
  return (
      <img
        css={css`
          height: 90px;
          background-color: #4E5968;
          border-radius: 8px;
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
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        `}
      >
        {name}
      </p>
      <div
        css={css`
        font-size: 16px;
        opacity: 0.6;
      `}
      >
        <p
          css={css`
            margin: 9px 0;
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
        font-size: 21px;
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
      <div
        css={css`
          margin-left: 19px;
        `}
      >
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
        margin-bottom: 50px;
      `}
    >
      <input
        css={css`
          width: 80%;
          height: 40px;
          font-size: 15px;
          border: solid 2px #4E5968;
          border-radius: 8px;
          outline: none;
          padding: 5px 15px;
        `}
        placeholder="공지사항을 입력해주세요."
        type="text"
      />
      <button
        css={css`
          width: 10%;
          height: 50px;
          font-size: 15px;
          font-weight: 700;
          background-color: #3182F6;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          padding: 0 10px;
          margin-left: 10px;
          cursor: pointer;
          &:hover {
            box-shadow: 2px 2px 1px #4E5968;
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
        padding: 0 25%;
      `}
    >
      {isAdmin && <InputBox />}
      {noticeData.map((data) => 
        <NoticeBox icon={icons[data.name]} name={data.name} date={data.date} content={data.content} />
      )}
    </div>
  );
}