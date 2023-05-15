/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import EventStatusButton from "../components/common/EventStatusButton";
import { InputProps, TextareaProps, contentTextProps } from "../@types/typs";
import Map from "../components/common/Map";
import { ReactComponent as AddButton } from "../images/addButton.svg";

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

const Detail = ({ onChange} : TextareaProps) => {
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

const Button = ({ text }: contentTextProps) => {
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
    ></input>
  );
};

export default function Editor() {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    content: "",
    latitude: 0,
    longitude: 0,
    state: true,
    mainFile: File,
    subFile: FileList
  })

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
            `}
            htmlFor="input-file"
          >
            <AddButton />
          </label>
          <input
            css={css`
              display: none;
            `}
            type="file"
            id="input-file"
            name="mainFile"
            onChange={(e) => {}}
          />
          <div
            css={css`
              height: 426px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}
          >
            <TitleInput 
              onChange={(event) => {
                setFormData({...formData, title:event.target.value});
              }}
              value={formData.title}
            />
            <SubTitleInput 
              onChange={(event) => {
                setFormData({...formData, subTitle:event.target.value});
              }}
              value={formData.subTitle}
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
                  border-radius: 0.3em;
                  border: ${formData.state ? "0.1em solid #8b95a1" : "none"};
                `}
                onClick={() => setFormData({...formData, state:true})}
              >
                <EventStatusButton isRunning={true} />
              </label>
              <label
                css={css`
                  border-radius: 0.3em;
                  border: ${formData.state ? "none" : "0.1em solid #8b95a1"};
                `}
                onClick={() => setFormData({...formData, state:false})}
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
              margin-right: 70px;
            `}
            htmlFor="input-file"
          >
            <AddButton />
          </label>
          <input
            css={css`
              display: none;
            `}
            type="file"
            name="subFile"
            id="input-file"
          />
        </div>
        <div>
          <Label text="상세 설명" />
          <Detail
            onChange={(event) => {
              setFormData({...formData, content:event.target.value});
            }}
            value={formData.content}
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
          <Button text="이벤트 발행하기" />
        </div>
      </form>
    </div>
  );
}
