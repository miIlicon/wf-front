/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

export default function Map() {
  const { kakao }: any = window;

  useEffect(() => {
    let mapContainer = document.getElementById("map"); // 지도를 표시할 div
    let mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #d9d9d9;
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
    >
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5em",
        }}
      ></div>
    </div>
  );
}
