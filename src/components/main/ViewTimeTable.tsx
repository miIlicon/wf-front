/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { eventProps } from "../../@types/typs";
import CurrentEventType from "./CurrentEventType";
import Modal from "../common/Modal";
import TimeTable from "./TimeTable";

export default function ViewTimeTable() {
  const [opened, setOpened] = useState<Boolean>(false);

  return (
    <div>
      {opened && (
        <Modal closePortal={() => setOpened(false)}>
          <TimeTable />
        </Modal>
      )}
      <div id="root-modal" />
      <div
        css={css`
          width: 100%;
          height: 6.56em;
          background-color: #3182f6;
          border-radius: 13px;

          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2em;
          box-sizing: border-box;
          margin-bottom: 3em;

          cursor: pointer;
        `}
        onClick={() => setOpened(true)}
      >
        <span
          css={css`
            color: white;
            font-family: "Pretendard-Bold";
            font-size: 20px;
            margin-right: auto;

            @media (max-width: 479px) {
              font-size: 14px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 16px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 18px;
            }
            @media all and (min-width: 1100px) {
              font-size: 20px;
            }
          `}
        >
          전체 타임 테이블 자세히 보러가기
        </span>
      </div>
    </div>
  );
}
