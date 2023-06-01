/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { CardProps } from "../../@types/typs";
import ModalPortal from "./ModalPortal";

export default function ContentCards({ thumb }: CardProps) {
  const [modalOpened, setModalOpened] = useState(false);

  const modalOpen = () : void => {
    setModalOpened(true);
  }

  const modalClose = () : void => {
    setModalOpened(false);
  }
  
  return (
    <div>
      {modalOpened && (
        <ModalPortal closePortal={modalClose}>
          <img
            css={css`
              width: 30em;
              height: 100%;
            `}
            src={thumb}
            alt=""
          />
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
        onClick={modalOpen}
      />
    </div>
  );
}
