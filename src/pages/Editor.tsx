/** @jsxImportSource @emotion/react */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Map from "../components/common/Map";
import { css } from "@emotion/react";
import EventStatusButton from "../components/common/EventStatusButton";
import "react-calendar/dist/Calendar.css"; // css import
import { ReactComponent as CalendarIcon } from "../images/emoji/calendar.svg";
import {
  DateProps,
  FileProps,
  InputProps,
  TextProps,
  TextareaProps,
  contentTextProps,
} from "../@types/typs";
import { ReactComponent as AddButton } from "../images/addButton.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { ReduxType } from "../app/store";
import API from "../utils/api";
import { Section } from "../components/common/components";
import Calendar from "react-calendar";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const TitleInput = ({ onChange }: InputProps) => {
  return (
    <input
      css={css`
        width: 638px;
        height: 40px;
        border: none;
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;
        font-size: 25px;
        color: #404040;
        outline: none;
        ::placeholder,
        ::-webkit-input-placeholder {
          font-size: 25px;
          line-height: 30px;
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
          color: #8b95a1;
        }
        :-ms-input-placeholder {
          font-size: 25px;
          line-height: 30px;
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
          color: #8b95a1;
        }
      `}
      type="text"
      placeholder="제목을 입력해주세요"
      onChange={onChange}
    ></input>
  );
};

const CalendarSection = ({ sDate, setSDate, eDate, setEDate }: DateProps) => {
  const sTouchNode = useRef<HTMLDivElement | null>(null);
  const eTouchNode = useRef<HTMLDivElement | null>(null);
  const calendarNode = useRef<HTMLDivElement | null>(null);
  const [isOpenStart, setIsOpenStart] = useState(false);
  const [isOpenEnd, setIsOpenEnd] = useState(false);
  const CalendarOverrideCss = `
  position: absolute;
            z-index: 999;
            top: ${
              isOpenStart &&
              sTouchNode.current &&
              sTouchNode.current?.offsetTop +
                sTouchNode.current.offsetHeight +
                10 +
                "px"
            };
            top: ${
              isOpenEnd &&
              eTouchNode.current &&
              eTouchNode.current?.offsetTop +
                eTouchNode.current.offsetHeight +
                10 +
                "px"
            };

            border-radius: 10px !important;
            box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1) !important;
            border: none !important;
            .react-calendar__navigation {
            }

            .react-calendar__tile--now {
              // border-radius: 8px;
            }

            .react-calendar__tile--active {
              // border-radius: 8px;
              background-color: #3182f6;
            }

            .react-calendar__month-view__weekdays {
              font-size: 1em;
            }

            abbr[title] {
              text-decoration: none !important;
            }

            .react-calendar__navigation__arrow {
              font-size: 1.3em !important;
            }

            .react-calendar__navigation__label__labelText {
              position: relative;
              top: 2px !important;
            }

            .react-calendar__navigation button:enabled:hover,
            .react-calendar__navigation button:enabled:focus {
              background-color: transparent !important;
            }`;

  useEffect(() => {
    document.addEventListener("click", function (event) {
      if (sTouchNode.current && eTouchNode.current) {
        if (sTouchNode.current.contains(event.target as HTMLElement)) {
          setIsOpenStart(true);
        } else {
          setIsOpenStart(false);
        }

        if (eTouchNode.current.contains(event.target as HTMLElement)) {
          setIsOpenEnd(true);
        } else {
          setIsOpenEnd(false);
        }
      }
    });
  }, []);

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        column-gap: -1em;
        font-size: 14px;
        color: #404040;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          color: #404040;
          column-gap: 0.4em;
          margin-right: 0.6em;
        `}
      >
        <CalendarIcon
          css={css`
            width: 1.2em !important;
          `}
        />
        <span>일정</span>
      </div>
      <div
        css={css`
          position: relative;
          font-family: "Pretendard-Regular";
          // box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
          padding: 0.35em 0.7em 0.35em 0.7em;
          border-radius: 0.3em;
          color: #404040;
          transition: 0.4s all;
          cursor: pointer;

          ${isOpenStart && `background-color: #ebecf0;`}

          &:hover {
            background-color: #ebecf0;
          }
        `}
        ref={sTouchNode}
        onClick={() => {
          setIsOpenStart(!isOpenStart);
          setIsOpenEnd(false);
        }}
        className="calendar"
      >
        {moment(sDate).format("YYYY년 MM월 DD일")}
      </div>
      <span
        css={css`
          font-family: "Pretendard-Regular";
          padding: 0em 0.3em 0em 0.3em;
          color: #404040;
        `}
      >
        ~
      </span>
      <div
        css={css`
          position: relative;
          font-family: "Pretendard-Regular";
          // box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
          padding: 0.35em 0.7em 0.35em 0.7em;
          border-radius: 0.3em;
          color: #404040;
          cursor: pointer;
          transition: 0.4s all;

          ${isOpenEnd && `background-color: #ebecf0;`}

          &:hover {
            background-color: #ebecf0;
          }
        `}
        onClick={() => {
          setIsOpenEnd(!isOpenEnd);
          setIsOpenStart(false);
        }}
        className="calendar"
        ref={eTouchNode}
      >
        {moment(eDate).format("YYYY년 MM월 DD일")}
      </div>
      {isOpenStart && (
        <Calendar
          css={css`
            ${CalendarOverrideCss}
          `}
          onChange={(selectDate: any) => setSDate(selectDate)}
          value={sDate}
          ref={calendarNode}
          className="calendarDetail"
          maxDate={eDate}
        />
      )}
      {isOpenEnd && (
        <Calendar
          css={css`
            ${CalendarOverrideCss}
          `}
          onChange={(selectDate: any) => setEDate(selectDate)}
          value={eDate}
          ref={calendarNode}
          className="calendarDetail"
          minDate={sDate}
        />
      )}
    </div>
  );
};

const SubTitleInput = ({ onChange }: InputProps) => {
  return (
    <input
      css={css`
        width: 638px;
        height: 1em;
        border: none;
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;
        font-size: 16px;
        color: #404040;
        outline: none;
        ::placeholder,
        ::-webkit-input-placeholder {
          font-family: "Pretendard-Regular";
          font-size: 16px;
          line-height: 20px;
          letter-spacing: -0.03em;
          color: #8b95a1;
        }
        :-ms-input-placeholder {
          font-family: "Pretendard-Regular";
          font-size: 16px;
          line-height: 20px;
          letter-spacing: -0.03em;
          color: #8b95a1;
        }
      `}
      name="subTItle"
      placeholder="소제목을 입력해주세요"
      onChange={onChange}
    ></input>
  );
};

const Label = ({ text }: contentTextProps) => {
  return (
    <p
      css={css`
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
        font-style: normal;
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -0.03em;
        color: #404040;

        margin-bottom: 20px;
      `}
    >
      {text}
    </p>
  );
};

const Detail = ({ onChange }: TextareaProps) => {
  return (
    <textarea
      css={css`
        width: 100%;
        height: 400px;
        font-family: "Pretendard-Regular";
        font-size: 18px;
        background: #ebecf0;
        border: none;
        border-radius: 21px;
        outline: none;
        padding: 27px;
        resize: none;
        box-sizing: border-box;
      `}
      name="content"
      placeholder="상세 설명을 입력해주세요"
      onChange={onChange}
    />
  );
};

const Button = ({ text, onClick }: TextProps) => {
  return (
    <input
      css={css`
        width: 13em;
        height: 3.5em;
        color: #ffffff;
        background-color: #3182f6;
        border: none;
        border-radius: 10px;
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
        font-style: normal;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: -0.03em;
        cursor: pointer;
      `}
      type="submit"
      value={text}
      onClick={onClick}
    ></input>
  );
};

export default function Editor() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [state, setState] = useState("");

  const [thumnail, setThumnail] = useState("");
  const [test1, setTest1] = useState("");
  const [test2, setTest2] = useState("");
  const [test3, setTest3] = useState("");
  const [sDate, setSDate] = useState(new Date());
  const [eDate, setEDate] = useState(new Date());

  const [imgFile, setImgFile] = useState("");
  const [subfirstFile, setsubfirstFile] = useState("");
  const [subtwiceFile, setsubtwiceFile] = useState("");
  const [subthirdFile, setsubthirdFile] = useState("");
  const [queryCheck, setQueryCheck] = useState(false);
  const [cookies, setCookie] = useCookies(["WF_ID"]);
  const latitude = useSelector((state: ReduxType) => state.fetcher.latitude);
  const longtitude = useSelector((state: ReduxType) => state.fetcher.longitude);

  const imgRef = useRef<any>(null);
  const imgfirstRef = useRef<any>(null);
  const imgtwiceRef = useRef<any>(null);
  const imgthirdRef = useRef<any>(null);

  const data = new FormData();
  const location = useLocation();
  const navigate = useNavigate();
  const type = new URLSearchParams(location.search).get("type");
  const currentTime = moment();
  let requestURL: string | null = null;
  let category: string | null = null;

  // 파라미터로 넘어오는 타입 값을 통해 API 요청 값을 유동적으로 변동해줍니다.
  if (type === "EVENT" || type === "GAME") {
    requestURL = `/api/v2/program`;
    category = `program`;
  }

  if (type === "FOOD_TRUCK" || type === "PUB" || type === "FLEA_MARKET") {
    requestURL = `/api/v2/booth`;
    category = `booth`;
  }

  useEffect(() => {
    if (!type) {
      navigate("/404");
    }

    if (!(cookies.WF_ID && cookies.WF_ID.AT && cookies.WF_ID.RT)) {
      navigate("/admin");
    }

    setQueryCheck(true);
  }, []);

  useEffect(() => {
    if (currentTime.isBefore(moment(sDate).format("YYYY-MM-DD 00:00"))) {
      // alert("시작 날짜가 현재 날짜보다 큽니다.");
      setState("UPCOMING");
    } else if (currentTime.isAfter(moment(eDate).format("YYYY-MM-DD 24:00"))) {
      // alert("만료 날짜가 현재 날짜보다 작습니다.");
      setState("TERMINATE");
    } else {
      // alert("현재 날짜가 시작 날짜와 만료 날짜 사이에 있습니다.");
      setState("OPERATE");
    }
  }, [sDate, eDate]);

  function requestData() {
    if (requestURL) {
      API.post(requestURL, data, {
        headers: {
          accessToken: `Bearer ${cookies.WF_ID.AT}`,
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          alert("게시물이 성공적으로 작성되었어요");
          if (category) {
            navigate(`/detail?category=${category}&id=${res.data}`);
          }
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
  }

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const subFile: any = [test1, test2, test3];

    data.append("title", title);
    data.append("subTitle", subTitle);
    data.append("content", content);
    data.append("latitude", latitude);
    data.append("longitude", longtitude);
    if (type) {
      data.append("type", type);
    }
    if (state) {
      data.append("operateStatus", "OPERATE");
    } else {
      data.append("operateStatus", "TERMINATE");
    }
    data.append("mainFile", thumnail);

    Array.from(subFile).forEach((img: any) => {
      data.append("subFiles", img);
    });
    data.append("startDate", moment(sDate).format("YYYY-MM-DD").toString());
    data.append("endDate", moment(eDate).format("YYYY-MM-DD").toString());
    requestData();
  };

  const tempImgFile = (e: React.FormEvent<HTMLInputElement>) => {
    let file;
    if (imgRef.current) {
      file = imgRef.current?.files[0];
    }

    setThumnail(file);
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const subImgFile1 = () => {
    let file;
    if (imgfirstRef.current) {
      file = imgfirstRef.current?.files[0];
    }
    setTest1(file);
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setsubfirstFile(reader.result);
    };
  };

  const subImgFile2 = () => {
    let file;
    if (imgtwiceRef.current) {
      file = imgtwiceRef.current?.files[0];
    }
    setTest2(file);
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setsubtwiceFile(reader.result);
    };
  };

  const subImgFile3 = () => {
    let file;
    if (imgthirdRef.current) {
      file = imgthirdRef.current?.files[0];
    }
    setTest3(file);
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setsubthirdFile(reader.result);
    };
  };

  return queryCheck ? (
    <Section>
      <form>
        <div
          css={css`
            display: flex;
            margin-bottom: 2em;
          `}
        >
          <label
            css={css`
              width: 301px;
              height: 301px;
              display: flex;
              justify-content: center;
              align-items: center;

              background: #ebecf0;
              border-radius: 21px;
              cursor: pointer;
              margin-right: 70px;
              ${imgFile &&
              css`
                background: url(${imgFile});
                box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: center;
                background-repeat: no-repeat;

                &:hover {
                  svg {
                    opacity: 80%;
                    path {
                      fill: white;
                    }
                    circle {
                      stroke: white;
                    }
                  }
                }
              `}
            `}
            htmlFor="input-file"
          >
            <AddButton
              css={css`
                ${imgFile &&
                css`
                  opacity: 0%;
                  transition: 0.05s all;
                `}
              `}
            />
          </label>
          <input
            css={css`
              display: none;
            `}
            type="file"
            id="input-file"
            name="mainFile"
            onChange={tempImgFile}
            ref={imgRef}
            accept="image/*"
          />
          <div
            css={css`
              height: 426px;
              display: flex;
              flex-direction: column;
              row-gap: 0.7em;
            `}
          >
            {/* 현재 이벤트 상태 제어 버튼 */}
            <div
              css={css`
                width: 100%;
                display: flex;
                justify-content: left;
                align-items: center;
                column-gap: 0.5em;
              `}
            >
              <label>
                <EventStatusButton
                  status={"UPCOMING"}
                  isRunning={state === "UPCOMING" ? true : false}
                  used={`edit`}
                />
              </label>
              <label>
                <EventStatusButton
                  status={"OPERATE"}
                  isRunning={state === "OPERATE" ? true : false}
                  used={`edit`}
                />
              </label>
              <label>
                <EventStatusButton
                  status={"TERMINATE"}
                  isRunning={state === "TERMINATE" ? true : false}
                  used={`edit`}
                />
              </label>
            </div>
            {/* 제목 */}
            <TitleInput
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              value={title}
            />
            {/* 소제목 */}
            <SubTitleInput
              onChange={(event) => {
                setSubTitle(event.target.value);
              }}
              value={subTitle}
            />
            <CalendarSection
              sDate={sDate}
              eDate={eDate}
              setSDate={setSDate}
              setEDate={setEDate}
            />
            <Map />
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
          `}
        >
          <Label text="이벤트 사진" />
          {/* 첫번째 사진 */}
          <div
            css={css`
              display: flex;
              column-gap: 2em;
            `}
          >
            <label
              css={css`
                width: 169px;
                height: 164px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #ebecf0;
                border-radius: 21px;
                cursor: pointer;
                ${subfirstFile &&
                css`
                  background: url(${subfirstFile});
                  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;

                  &:hover {
                    svg {
                      opacity: 80%;
                      path {
                        fill: white;
                      }
                      circle {
                        stroke: white;
                      }
                    }
                  }
                `}
              `}
              htmlFor="input-file1"
            >
              <AddButton
                css={css`
                  ${subfirstFile &&
                  css`
                    opacity: 0%;
                    transition: 0.05s all;
                  `}
                `}
              />
            </label>
            <input
              css={css`
                display: none;
              `}
              type="file"
              name="subFile"
              id="input-file1"
              onChange={subImgFile1}
              ref={imgfirstRef}
              accept="image/*"
            />
            {/* 두번째 사진 */}
            <label
              css={css`
                width: 169px;
                height: 164px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #ebecf0;
                border-radius: 21px;
                cursor: pointer;
                ${subtwiceFile &&
                css`
                  background: url(${subtwiceFile});
                  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;

                  &:hover {
                    svg {
                      opacity: 80%;
                      path {
                        fill: white;
                      }
                      circle {
                        stroke: white;
                      }
                    }
                  }
                `}
              `}
              htmlFor="input-file2"
            >
              <AddButton
                css={css`
                  ${subtwiceFile &&
                  css`
                    opacity: 0%;
                    transition: 0.05s all;
                  `}
                `}
              />
            </label>
            <input
              css={css`
                display: none;
              `}
              type="file"
              name="subFile"
              id="input-file2"
              onChange={subImgFile2}
              ref={imgtwiceRef}
              accept="image/*"
            />
            {/* 세번째 사진 */}
            <label
              css={css`
                width: 169px;
                height: 164px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #ebecf0;
                border-radius: 21px;
                cursor: pointer;
                ${subthirdFile &&
                css`
                  background: url(${subthirdFile});
                  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;

                  &:hover {
                    svg {
                      opacity: 80%;
                      path {
                        fill: white;
                      }
                      circle {
                        stroke: white;
                      }
                    }
                  }
                `}
              `}
              htmlFor="input-file3"
            >
              <AddButton
                css={css`
                  ${subthirdFile &&
                  css`
                    opacity: 0%;
                    transition: 0.05s all;
                  `}
                `}
              />
            </label>
            <input
              css={css`
                display: none;
              `}
              type="file"
              name="subFile"
              id="input-file3"
              onChange={subImgFile3}
              ref={imgthirdRef}
              accept="image/*"
            />
          </div>
        </div>
        <div>
          <Label text="상세 설명" />
          <Detail
            onChange={(event) => {
              setContent(event.target.value);
            }}
            value={content}
          />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;

            margin-top: 58px;
          `}
        >
          <Button text="이벤트 발행하기" onClick={handleSubmit} />
        </div>
      </form>
    </Section>
  ) : (
    <></>
  );
}
