/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import {
  NoticeProps,
  ProfileProps,
  contentTextProps,
  NoticeSubmitProps,
  ImageProps,
} from "../../@types/typs";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import profile from "../../data/profile.json";
import { ReactComponent as Plane } from "../../images/emoji/plane.svg";
import Inform from "../../components/common/Notice";
import API from "../../utils/api";

const Icon = ({ src }: ImageProps) => {
  return (
    <img
      css={css`
        background-color: #4e5968;
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
};

const Profile = ({ name, date }: ProfileProps) => {
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
};

const Content = ({ text }: contentTextProps) => {
  return (
    <p
      css={css`
        max-width: 800px;
        font-family: "Pretendard-Medium";
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
};

const NoticeBox = ({
  icon,
  id,
  name,
  date,
  content,
  trigger,
  changeTrigger,
}: NoticeProps) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["WF_ID"]);

  function deleteNotice() {
    if (window.confirm("공지사항을 정말 삭제하시겠어요?")) {
      API.delete(`/api/v2/guide/${id}`, {
        headers: {
          accessToken: `Bearer ${cookies.WF_ID.AT}`,
        },
      })
        .then(() => {
          alert("성공적으로 삭제되었어요");
          changeTrigger(!trigger);
        })
        .catch(() => {
          alert(`알 수 없는 오류가 발생했어요!`);
        });
    }
  }

  return (
    <div
      css={css`
        display: flex;
        font-family: "Pretendard-Medium";
        color: #4e5968;
        margin: 27px 0;
        margin-right: auto;
        text-align: left;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Icon src={icon} />
        {cookies.WF_ID && cookies.WF_ID.AT && cookies.WF_ID.RT && (
          <button
            css={css`
              width: 50px;
              font-family: "Pretendard-Medium";
              border: none;
              border-radius: 5px;
              background-color: #ea5656;
              color: white;
              transform: translate(-8px, 15px);
              padding: 2px 10px;
              cursor: pointer;
            `}
            onClick={deleteNotice}
          >
            삭제
          </button>
        )}
      </div>
      <div>
        <Profile name={name} date={date} />
        <Content text={content} />
      </div>
    </div>
  );
};

const InputBox = ({ value, onChange, onClick }: NoticeSubmitProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 1em;

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
      <textarea
        css={css`
          width: 100%;
          border-radius: 0.7em;
          outline: none;
          box-sizing: border-box;
          padding: 1em;
          height: 8em;
          font-family: "Pretendard-Regular";
          resize: none;
          background-color: rgba(36, 42, 48, 0.02);
          border: none;
          box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.04);
          color: #242a30;

          @media (max-width: 479px) {
            font-size: 8px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 11px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 13px;
          }
          @media all and (min-width: 1100px) {
            font-size: 16px;
          }
        `}
        value={value}
        onChange={onChange}
        placeholder="금일 공지할 공지사항을 입력해주세요"
      />
      <button
        css={css`
          height: 50px;
          background-color: #3182f6;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: 10em;
          margin-right: auto;
          font-family: "Pretendard-Bold";

          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.3em;

          @media (max-width: 479px) {
            font-size: 8px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 11px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 13px;
          }
          @media all and (min-width: 1100px) {
            font-size: 16px;
          }
        `}
        onClick={onClick}
      >
        <Plane
          css={css`
            path {
              fill: white;
            }
          `}
        />
        공지사항 등록
      </button>
    </div>
  );
};

export default function Notice() {
  const [cookies, setCookie] = useCookies(["WF_ID"]);
  const icons = JSON.parse(JSON.stringify(profile));
  const [trigger, setTrigger] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [noticeData, setNoticeData] = useState<any>([]);

  const getNotice = async () => {
    await API.get(`/api/v2/guide/list`, {
      params: { page: 0, size: 20 },
    }).then((res) => {
      setNoticeData(res.data.guideResList);
    });
  };

  const data = new FormData();
  data.append("content", content);

  const handleClick = () => {
    API.post(`/api/v2/guide`, data, {
      headers: {
        accessToken: `Bearer ${cookies.WF_ID.AT}`,
      },
    })
      .then((res) => {
        setContent("");
        setTrigger(!trigger);
      })
      .catch(() => {
        alert(`알 수 없는 오류가 발생했어요!`);
      });
  };

  useEffect(() => {
    getNotice();
  }, [trigger]);

  return (
    <div
      css={css`
        font-family: "Pretendard-Medium";
        display: flex;
        flex-direction: column;
      `}
    >
      {cookies.WF_ID && cookies.WF_ID.AT && cookies.WF_ID.RT && (
        <InputBox
          value={content}
          onClick={handleClick}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      )}
      {noticeData.length > 0 ? (
        noticeData.map((data: any) => (
          <NoticeBox
            icon={icons[data.username]}
            id={data.id}
            name={data.username}
            date={data.createdDateTime}
            content={data.content}
            trigger={trigger}
            changeTrigger={setTrigger}
          />
        ))) : (
          <Inform text="아직 등록된 공지사항이 없어요" />
        )
      }
    </div>
  );
}
