/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Banner from "./Banner";

export default function Header() {
  const [scrollState, setScrollState] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY || document.documentElement.scrollTop > 0) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, [window.scrollY || document.documentElement.scrollTop]);

  return (
    <>
      <header
        css={css`
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 1.2em;
          padding-bottom: 1.2em;

          margin-left: auto;
          margin-right: auto;

          @media (max-width: 1099px) {
            column-gap: 10%;
            padding-left: 1.5em;
            padding-right: 1.5em;
            box-sizing: border-box;
          }
          @media (max-width: 479px) {
            font-size: 11px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 14px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 16px;
          }
          @media all and (min-width: 1100px) {
            font-size: 18px;
          }
          background-color: white;

          ${scrollState &&
          css`
            border: solid;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 1;
            border-color: #e6e8ea;
            border-width: 1px;
          `}

          a {
            text-decoration: none;
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 14.8px;
            }
            @media all and (min-width: 1100px) and (max-width: 2000px) {
              font-size: 14.8px;
            }
            color: #4e5968;
            font-family: "Pretendard-Regular";
            letter-spacing: -0.03em;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            jusitify-content: center;
            align-items: center;
            width: 56.5em;
          `}
        >
          <img
            alt="로고"
            src={logo}
            css={css`
              height: auto;
              width: 8em;
              cursor: pointer;
              transition: 0.4s all;

              &:hover {
                opacity: 70%;
              }
            `}
            onClick={() => navigate("/")}
          />
          <nav
            css={css`
              height: 100%;
              display: flex;
              column-gap: 2.5em;
              transition: 0.4s all;
              margin-left: auto;
              justify-content: space-between;

              @media (max-width: 479px) {
                font-size: 10px;
                column-gap: 1em;
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
            <Link to={"festivalInfo"} tabIndex={-1}>
              축제정보
            </Link>
            <Link to={"fleamarket"} tabIndex={-1}>
              플리마켓
            </Link>
            <Link to={"foodtruck"} tabIndex={-1}>
              푸드트럭
            </Link>
            <Link to={"video"} tabIndex={-1}>
              축제영상
            </Link>
          </nav>
        </div>
      </header>
      <Banner />
      <Outlet />
    </>
  );
}
