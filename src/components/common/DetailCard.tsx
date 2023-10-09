/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { CardProps } from "../../@types/typs";
import ModalPortal from "./ModalPortal";

export const DetailThumb = ({ thumb }: CardProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  const modalOpen = (): void => {
    setModalOpened(true);
  };

  const modalClose = (): void => {
    setModalOpened(false);
  };

  return (
    <div>
      {modalOpened && (
        <ModalPortal closePortal={modalClose}>
          <img
            css={css`
              width: 30em;
              height: 30em;
            `}
            src={thumb}
            alt=""
          />
        </ModalPortal>
      )}
      <div id="root-modal" />
      <img
        css={css`
          width: 17.93em;
          height: auto;
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
        src={thumb}
        alt=""
        onClick={modalOpen}
      />
    </div>
  );
};
