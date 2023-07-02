/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import Map from "../components/common/Map";
import { css } from "@emotion/react";
import EventStatusButton from "../components/common/EventStatusButton";
import {
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

const TitleInput = ({ onChange }: InputProps) => {
  return (
    <input
      css={css`
        width: 638px;
        height: 40px;
        border: none;
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
        font-size: 25px;
        color: #4e5968;
        outline: none;
        ::placeholder,
        ::-webkit-input-placeholder {
          font-size: 25px;
          line-height: 30px;
          font-family: "Pretendard-Medium";
          letter-spacing: -0.03em;
          color: #8b95a1;
        }
        :-ms-input-placeholder {
          font-size: 25px;
          line-height: 30px;
          font-family: "Pretendard-Medium";
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

const SubTitleInput = ({ onChange }: InputProps) => {
  return (
    <input
      css={css`
        width: 638px;
        height: 1em;
        border: none;
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;
        font-size: 16px;
        color: #4e5968;
        outline: none;
        ::placeholder,
        ::-webkit-input-placeholder {
          font-family: "Pretendard-Medium";
          font-size: 16px;
          line-height: 20px;
          letter-spacing: -0.03em;
          color: #8b95a1;
        }
        :-ms-input-placeholder {
          font-family: "Pretendard-Medium";
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
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;
        font-style: normal;
        font-weight: 800;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: -0.03em;
        color: #4e5968;

        margin-bottom: 40px;
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
        width: 1010px;
        height: 327px;
        font-family: "Pretendard-Regular";
        font-size: 18px;
        background: #ebecf0;
        border: none;
        border-radius: 21px;
        outline: none;
        padding: 27px;
        resize: none;
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
        font-weight: 800;
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
  const [state, setState] = useState(false);

  const [thumnail, setThumnail] = useState("");
  const [test1, setTest1] = useState("");
  const [test2, setTest2] = useState("");
  const [test3, setTest3] = useState("");

  const [imgFile, setImgFile] = useState("");
  const [subfirstFile, setsubfirstFile] = useState("");
  const [subtwiceFile, setsubtwiceFile] = useState("");
  const [subthirdFile, setsubthirdFile] = useState("");
  const latitude = useSelector((state: ReduxType) => state.fetcher.latitude);
  const longtitude = useSelector((state: ReduxType) => state.fetcher.longitude);

  const imgRef = useRef<any>(null);
  const imgfirstRef = useRef<any>(null);
  const imgtwiceRef = useRef<any>(null);
  const imgthirdRef = useRef<any>(null);

  const data = new FormData();

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const dataSet: any = {
      title: title,
      subTitle: subTitle,
      content: content,
      latitude: latitude,
      longtitude: longtitude,
      state: state,
    };

    const subFile: any = [test1, test2, test3];

    // data.append("dto", JSON.stringify(dataSet));
    data.append("title", title);
    data.append("subTitle", subTitle);
    data.append("content", content);
    data.append("latitude", latitude);
    data.append("longitude", longtitude);
    data.append("state", state.toString());
    data.append("mainFile", thumnail);

    // for (let i = 0; i < subFile.length; i++) {
    //   data.append("sub-file", subFile[i]);
    // }

    Array.from(subFile).forEach((img: any) => {
      data.append("subFiles", img);
      // console.log(img);
    });

    // data.append("sub-file", subFile);
    // data.append("sub-file", subtwiceFile);
    // data.append("sub-file", subthirdFile);
    // console.log("formdata", data);

    for (let key of data.entries()) {
      console.log(key);
    }

    console.log(data);

    await API.post(`/api/v1/festivalEvent/integrated`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        alert(res);
      })
      .catch((error) => {
        alert("에러 발생!");

        // for (let i of data) {
        //   console.log("!!", i);
        // }
      });
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

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Pretendard-Regular";
        padding: 59px 455px;
      `}
    >
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
              height: 426px;
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
            <TitleInput
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              value={title}
            />
            <SubTitleInput
              onChange={(event) => {
                setSubTitle(event.target.value);
              }}
              value={subTitle}
            />
            <div
              css={css`
                width: 100%;
                display: flex;
                justify-content: left;
                align-items: center;
                column-gap: 1em;
              `}
            >
              <label
                css={css`
                  border-radius: 0.2em;
                  outline: ${state ? "0.07em solid #8b95a1" : "none"};
                `}
                onClick={() => setState(true)}
              >
                <EventStatusButton isRunning={true} />
              </label>
              <label
                css={css`
                  border-radius: 0.2em;
                  outline: ${state ? "none" : "0.07em solid #8b95a1"};
                `}
                onClick={() => setState(false)}
              >
                <EventStatusButton isRunning={false} />
              </label>
            </div>
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
          <Label text="관련된 더 많은 사진을 보여드릴게요" />
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
    </div>
  );
}
