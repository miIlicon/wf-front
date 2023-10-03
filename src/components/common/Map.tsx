/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { MapProps } from "../../@types/typs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { saveLocation } from "../../features/fetcherSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function Map({ lat = 37.27574, lon = 127.13249 }: MapProps) {
  const { kakao }: any = window;
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    let mapContainer = document.getElementById("map"); // 지도를 표시할 div

    let mapOption = {
      center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);

    var markerPosition = new kakao.maps.LatLng(lat, lon);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
      if (location.pathname === "/detail") {
        return;
      }

      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      dispatch(
        saveLocation({ latitude: latlng.getLat(), longitude: latlng.getLng() })
      );

      var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
      message += "경도는 " + latlng.getLng() + " 입니다";

      // console.log(message);
    });
  }, [lat, lon]);

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
