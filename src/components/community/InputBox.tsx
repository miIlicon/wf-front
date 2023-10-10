/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import API from "../../utils/api";
import axios from "axios";
import { chatBoxProps, communityStateProps } from "../../@types/typs";
import Toggle from "./Toggle";
import Required from "./Required";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { isExpirationToken } from "../../utils/cookies";

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
  const contactRef = useRef<HTMLTextAreaElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);
  let abuseList: string[] | null = null;
  if (process.env.REACT_APP_ABUSE_DB) {
    abuseList = process.env.REACT_APP_ABUSE_DB.split(",");
  }

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
      if (event.target && event.target.value.length < 30) {
        setEmail(event.target.value);
      }
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

  function handleFocus(event: React.FocusEvent<HTMLTextAreaElement>) {
    if (event.target.name && event.target.name === "연락처") {
      if (event.target && event.target.value.length === 0) {
        if (contactRef.current) {
          contactRef.current.scrollTop = 0;
        }
      }
    }
    if (event.target.name && event.target.name === "내용") {
      if (event.target && event.target.value.length === 0) {
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
        }
      }
    }
  }

  function requestData() {
    let abuseState = false;
    if (abuseList && abuseList.length) {
      if (submitRef.current) {
        submitRef.current.textContent = "필터링 중..";
        setValidation(true);
      }

      for (let i = 0; i < abuseList.length; i++) {
        let abuseWord = abuseList[i].trim();
        if (value.indexOf(abuseWord) !== -1) {
          setCompleteLoad(false);
          abuseState = true;
          if (submitRef.current) {
            submitRef.current.textContent = "등록";
            setValidation(false);
            setValue("");
          }
          alert("대나무 숲에서 사용할 수 없는 단어가 검출 되었어요");
          break;
        }
      }
    }

    if (!abuseState) {
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
          if (contactRef.current && contentRef.current) {
            contactRef.current.scrollTop = 0;
            contentRef.current.scrollTop = 0;
          }
        })
        .catch(() => {
          alert("오류가 발생했어요, 관리자에게 문의해주세요");
          window.location.reload();
          // navigate("/error");
        });
    }
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
          height: 21.5em;

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
        <textarea
          css={css`
            border: none;
            font-size: 16px;
            font-family: "Pretendard-Regular";
            padding: 0;
            resize: none;
            line-height: 1.5em;

            @media (max-width: 479px) {
              font-size: 13px;
              padding-bottom: 3em;
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

            ::-webkit-scrollbar-track {
              background-color: transparent;
            }

            ::-webkit-scrollbar-thumb {
              height: 56px;
              border-radius: 8px;
              border: 4px solid transparent;
              background-clip: content-box;
              background-color: rgba(0, 0, 0, 0.1);
            }

            ::-webkit-scrollbar-thumb:hover {
              background-color: rgba(0, 0, 0, 0.4);
            }

            ::-webkit-scrollbar-thumb:active {
              background-color: rgba(0, 0, 0, 0.6);
            }
          `}
          value={email}
          name="연락처"
          placeholder="이벤트를 참여하고 싶다면 연락처를 적어주세요, 정보는 안전하게 우리만 알고 있을게요!"
          onChange={handleChange}
          onFocus={handleFocus}
          ref={contactRef}
        />
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
          내용
          <Required />
        </span>
        <textarea
          placeholder="우리 학교 대나무 숲에 남길 메세지를 입력해주세요&#10;대나무 숲 취지에 맞지 않는 내용은 삭제 및 IP 제한이 있을 수 있습니다."
          maxLength={200}
          onChange={handleChange}
          onFocus={handleFocus}
          value={value}
          ref={contentRef}
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

            ::-webkit-scrollbar-track {
              background-color: transparent;
            }

            ::-webkit-scrollbar-thumb {
              height: 56px;
              border-radius: 8px;
              border: 4px solid transparent;
              background-clip: content-box;
              background-color: rgba(0, 0, 0, 0.1);
            }

            ::-webkit-scrollbar-thumb:hover {
              background-color: rgba(0, 0, 0, 0.4);
            }

            ::-webkit-scrollbar-thumb:active {
              background-color: rgba(0, 0, 0, 0.6);
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
            ref={submitRef}
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
