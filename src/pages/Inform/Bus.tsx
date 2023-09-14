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
        
        @media (max-width: 479px) {
          font-size: 20px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 26px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 32px;
        }
        @media all and (min-width: 1100px) {
          font-size: 34px;
        }
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
        fill: #4E5968;
        opacity: 0.6;
        cursor: pointer;

        @media (max-width: 479px) {
          height: 35px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          height: 40px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          height: 45px;
        }
        @media all and (min-width: 1100px) {
          height: 50px;
        }
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
        border-radius: 24px;

        @media (max-width: 479px) {
          width: 280px;
          height: 280px;
          margin: 46px 13px 46px 13px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          width: 330px;
          height: 330px;
          margin: 50px 20px 50px 20px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          width: 380px;
          height: 380px;
          margin: 54px 30px 54px 30px;
        }
        @media all and (min-width: 1100px) {
          width: 431px;
          height: 431px;
          margin: 58px 40px 58px 40px;
        }
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
        cursor: pointer;

        @media (max-width: 479px) {
          height: 80px;
          margin: 0 4px;
          border-radius: 12px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          height: 118px;
          margin: 0 8px;
          border-radius: 16px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          height: 154px;
          margin: 0 10px;
          border-radius: 20px;
        }
        @media all and (min-width: 1100px) {
          height: 190px;
          margin: 0 12px;
          border-radius: 24px;
        }
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