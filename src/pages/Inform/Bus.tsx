/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { ImageProps, TextProps } from "../../@types/typs";
import prevButton from "../../images/prevButton.svg";
import nextButton from "../../images/nextButton.svg";

const InfoMessage = () => {
  return (
    <p
      css={css`
        font-family: "Pretendard-Bold";
        font-size: 34px;
      `}
    >
      👀 달구지 변동사항을 빠르게 알려드릴게요
    </p>
  )
}

const ArrowButton = ({ text, onClick } : TextProps) => {
  return (
    <img
      css={css`
        height: 50px;
        fill: #4E5968;
        opacity: 0.6;
        margin: 0 50px;
        cursor: pointer;
      `}
      src={text}
      alt=""
      onClick={onClick}
    />
  )
}

const MainImage = ({ src } : ImageProps) => {
  return (
    <img
      css={css`
        width: 431px;
        height: 431px;
        border-radius: 24px;
      `}
      src={src}
      alt=""
    />
  )
}

const SubImage = ({ text, onClick } : TextProps) => {
  return (
    <img
      css={css`
        height: 190px;
        border-radius: 24px;
        margin: 0 12px;
        cursor: pointer;
      `}
      src={text}
      alt=""
      onClick={onClick}
    />
  )
}

export default function Bus() {
  const [idx, setIdx] = useState<number>(0);
  const images = [
    "https://cdn.discordapp.com/attachments/1065535933941813290/1147737906774024293/IMG_6507.png",
    "https://cdn.discordapp.com/attachments/1065535933941813290/1147737907092803614/IMG_6508.png",
    "https://cdn.discordapp.com/attachments/1065535933941813290/1147737907382194176/IMG_6509.png",
    "https://cdn.discordapp.com/attachments/1065535933941813290/1147737907747115008/IMG_6510.png"
  ]
  
  const changeMain = (i : number) => {
    if (i === -1) setIdx(images.length-1);
    else setIdx(i%images.length);
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
      `}
    >
      <InfoMessage />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 832px;
          height: 431px;
          border-radius: 24px;
          margin: 58px 12px;
        `}
      >
        <ArrowButton text={prevButton} onClick={() => changeMain(idx-1)} />
        <MainImage src={images[idx]} />
        <ArrowButton text={nextButton} onClick={() => changeMain(idx+1)} />
      </div>
      <div>
        {images.map((url, i) => 
          <SubImage text={url} onClick={() => changeMain(i)} />
        )}
      </div>
    </div>
  );
}