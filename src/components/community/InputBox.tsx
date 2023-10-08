/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import API from "../../utils/api";
import axios from "axios";
import { chatBoxProps, communityStateProps } from "../../@types/typs";
import Toggle from "./Toggle";
import Required from "./Required";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function ChatBox({
  changeTrigger,
  setAutoUpdate,
  trigger,
  autoUpdate,
}: communityStateProps) {
  const [currentLength, setCurrentLength] = useState(0);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [validation, setValidation] = useState(false);
  const [completeLoad, setCompleteLoad] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["WF_ID"]);
  const navigate = useNavigate();
  const form = new FormData();

  function toggleChange() {
    setChecked(!checked);
    setAutoUpdate(!autoUpdate);
  }

  function handleChange(
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) {
    if (event.target.name && event.target.name === "연락처") {
      setEmail(event.target.value);
    }
    if (event.target.name && event.target.name === "내용") {
      if (event.target && currentLength < 200) {
        setCurrentLength(event.target.value.length);
        setValue(event.target.value);
      }

      if (event.target.value.length !== 0) {
        setValidation(true);
      } else {
        setValidation(false);
      }
    }
  }

  function requestData() {
    API.post("/api/v2/bambooforest", form, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(() => {
        setValue("");
        setEmail("");
        setValidation(false);
        setCurrentLength(0);
        changeTrigger(!trigger);
        setCompleteLoad(false);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errorMessage
        ) {
          console.log(error.response.data.errorMessage);
          if (
            error.response.data.errorMessage ===
            "기한이 만료된 AccessToken입니다."
          ) {
            API.get(`/api/v2/member/rotate`, {
              headers: {
                refreshToken: `Bearer ${cookies.WF_ID.RT}`,
              },
            })
              .then((res) => {
                setCookie("WF_ID", {
                  AT: res.data.accessToken,
                  RT: res.data.refreshToken,
                });
                return requestData();
              })
              .catch(() => {
                navigate("/error");
              });
          }
        }
      });
  }

  function handleClick() {
    form.append("content", value);
    form.append("contact", email);
    setCompleteLoad(true);
    requestData();
  }

  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
          column-gap: 0.5em;
          margin-top: 3em;
          margin-bottom: 1.1em;
          cursor: pointer;

          @media (max-width: 479px) {
            font-size: 13px;
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
        `}
        onClick={toggleChange}
      >
        <span
          css={css`
            display: block;
            font-family: "Pretendard-Regular";
            font-size: 16px;
            color: #404040;

            @media (max-width: 479px) {
              font-size: 13px;
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
          `}
        >
          대나무 숲 자동 업데이트
        </span>
        <Toggle checked={checked} />
      </div>
      <div
        css={css`
          width: 100%;
          background-color: #ffffff;
          border-radius: 1em;
          height: 19.5em;

          display: flex;
          flex-direction: column;
          justify-content: center;
          row-gap: 1.1em;
          padding: 1.5em 2em 1.5em 2em;
          box-sizing: border-box;

          @media (max-width: 479px) {
            font-size: 13px;
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
        `}
      >
        <span
          css={css`
            display: block;
            font-family: "Pretendard-Bold";
            font-size: 16px;

            @media (max-width: 479px) {
              font-size: 13px;
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
          `}
        >
          이벤트 참여 정보
        </span>
        <input
          css={css`
            border: none;
            font-size: 16px;
            font-family: "Pretendard-Regular";
            padding: 0;

            @media (max-width: 479px) {
              font-size: 13px;
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

            &:focus {
              outline: none;
            }
          `}
          value={email}
          name="연락처"
          placeholder="이벤트를 참여하고 싶다면 이메일 또는 번호를 적어주세요, 정보는 우리만 알고 있을게요!"
          onChange={handleChange}
        />
        <span
          css={css`
            display: block;
            font-family: "Pretendard-Bold";
            font-size: 16px;
            margin-top: 0.5em;

            @media (max-width: 479px) {
              font-size: 13px;
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
          `}
        >
          내용
          <Required />
        </span>
        <textarea
          placeholder="우리 학교 대나무 숲에 남길 메세지를 입력해주세요&#10;대나무 숲 취지에 맞지 않는 내용은 삭제 및 IP 제한이 있을 수 있습니다."
          maxLength={200}
          onChange={handleChange}
          value={value}
          name="내용"
          css={css`
            border: none;
            width: 100%;
            height: 3.5em;
            border: 0.11em solid;
            border-left: 0;
            border-right: 0;
            border-top: 0;
            resize: none;
            border-color: rgba(192, 192, 192, 0.5);
            font-family: "Pretendard-Regular";
            line-height: 1.5em;
            font-size: 16px;
            padding: 0;
            padding-bottom: 5em;
            box-sizing: border-box;
            border-radius: 0px;

            @media (max-width: 479px) {
              font-size: 13px;
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
              transition: 0.4s all;
              cursor: pointer;

              @media (max-width: 479px) {
                font-size: 13px;
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

              ${(completeLoad || !validation) &&
              `
              filter: grayscale(100%);
              cursor: default;
              `}
            `}
            onClick={handleClick}
            disabled={completeLoad || !validation}
          >
            {completeLoad ? "작성 중.." : "등록"}
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

              @media (max-width: 479px) {
                font-size: 13px;
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
    </>
  );
}
