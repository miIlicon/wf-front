/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { CardListProps } from "../../@types/typs";
import Card from "./Card";

export default function CardList({ dataList, isRunning }: CardListProps) {
  return (
    <div
      css={css`
        font-size: 16px;
        width: 65.8em;

        @media all and (max-width: 1100px) {
          width: 100%;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          box-sizing: border-box;
          padding-right: 1em;
          padding-left: 1em;

          display: grid;
          grid-template-columns: 1fr 1fr 1fr;

          @media all and (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
          }

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

          flex-wrap: wrap;
          justify-content: center;
          align-items: center;

          column-gap: 3.5em;
          row-gap: 2.8em;
          margin-bottom: 3em;
        `}
      >
        {dataList.map(
          (data) =>
            (isRunning === undefined || isRunning === data.isRunning) && (
              <div css={css``}>
                <Card
                  id={data.id}
                  title={data.title}
                  subTitle={data.subTitle}
                  isRunning={data.foodTruckState}
                  thumb={data.mainFilePath}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
