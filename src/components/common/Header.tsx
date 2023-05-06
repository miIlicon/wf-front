/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link, Outlet } from "react-router-dom";
import Banner from "./Banner";

export default function Header() {
  const [scrollState, setScrollState] = useState<boolean>(false);

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
          position: relative;
          z-index: 999;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 1.2em;
          padding-bottom: 1.2em;
          @media (max-width: 1099px) {
            display: none;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 18px;
          }
          @media all and (min-width: 1100px) and (max-width: 2000px) {
            font-size: 18px;
          }
          column-gap: 30em;
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
        />
        <nav
          css={css`
            height: 100%;
            display: flex;
            column-gap: 2.5em;
            transition: 0.4s all;
          `}
        >
          <Link to={""} tabIndex={-1}>
            축제정보
          </Link>
          <Link to={""} tabIndex={-1}>
            플리마켓
          </Link>
          <Link to={""} tabIndex={-1}>
            푸드트럭
          </Link>
          <Link to={""} tabIndex={-1}>
            축제영상
          </Link>
        </nav>
      </header>
    </>
  );
}
