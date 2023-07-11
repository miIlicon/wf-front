/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { ContentCardsProps } from "../../@types/typs";
import nextButton from "../../images/nextButton.png";
import prevButton from "../../images/prevButton.png";
import ModalPortal from "./ModalPortal";

export default function ContentCards({ thumb, idx, dataList }: ContentCardsProps) {
  const [modalOpened, setModalOpened] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(idx);

  const modalOpen = (idx : number) : void => {
    setCurrentIdx(idx);
    setModalOpened(true);
  }

  const modalClose = () : void => {
    setModalOpened(false);
  }

  const next = () : void => {
    setCurrentIdx((currentIdx+1)%dataList.length);
  }

  const prev = () : void => {
    if (currentIdx === 0) {
      setCurrentIdx(dataList.length-1);
    }
    else {
      setCurrentIdx(currentIdx-1);
    }
    
  }
  
  return (
    <div>
      {modalOpened && (
        <ModalPortal closePortal={modalClose}>
          <div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <img
                css={css`
                  background-color: transparent;
                  height: 20px;
                  margin: 0 10px;
                  cursor: pointer;
              `}
                src={prevButton}
                alt=""
                onClick={prev}
              />
              <img
                css={css`
                  width: 30em;
                  height: 100%;
                `}
                src={dataList[currentIdx]}
                alt=""
              />
              <img
                css={css`
                  background-color: transparent;
                  height: 20px;
                  margin: 0 10px;
                  cursor: pointer;
                `}
                src={nextButton}
                alt=""
                onClick={next}
              />
            </div>
            <p
              css={css`
                color: #ffffff;
                text-align: center;
                font-family: "Pretendard-Medium";
              `}
            >
              {currentIdx+1} / {dataList.length}
            </p>
          </div>
        </ModalPortal>
      )}
      <div id="root-modal"/>
      <img
        src={thumb}
        alt="콘텐츠 부가 이미지"
        css={css`
          width: 10em;
          height: 10em;
          border-radius: 0.5em;

          @media (max-width: 479px) {
            font-size: 10px;
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
        onClick={() => modalOpen(idx)}
      />
    </div>
  );
}
