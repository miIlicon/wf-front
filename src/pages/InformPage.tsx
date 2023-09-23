/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { ButtonProps } from "../@types/typs";
import PageTitle from "../components/common/PageTitle";
import QandA from "./Inform/QandA";
import Notice from "./Inform/Notice";
import Bus from "./Inform/Bus";

const Menu = ({ text, isSelect, value, onClick }: ButtonProps) => {
  return (
    <button
      css={css`
        opacity: ${isSelect ? "1" : "0.3"};
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;
        
        @media (max-width: 479px) {
          font-size: 28px;
          margin: 0 25px;
        }
        @media all and (min-width: 480px) and (max-width: 767px) {
          font-size: 30px;
          margin: 0 40px
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 32px;
          margin: 0 85px
        }
        @media all and (min-width: 1100px) {
          font-size: 34px;
          margin: 0 110px;
        }
      `}
      onClick={() => onClick(value)}
      value={value}
    >
      <PageTitle text={text} />
    </button>
  );
}

export default function InformPage() {
  const location = useLocation();
  const state = location.state as { menu: string };
  const [selectMenu, setSelectMenu] = useState<string>(state ? state.menu : "Q&A");

  const onClickMenu = (value: string) => {
    setSelectMenu(value);
  };

  useEffect(() => {
    setSelectMenu(state ? state.menu : "Q&A");
  }, [state]);

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 40px 0;
        `}
      >
        <Menu 
          text="Q&A"
          isSelect={selectMenu === "Q&A"}
          value="Q&A"
          onClick={onClickMenu}
        />
        <Menu 
          text="공지사항"
          isSelect={selectMenu === "notice"}
          value="notice"
          onClick={onClickMenu}
        />
        <Menu 
          text="달구지"
          isSelect={selectMenu === "bus"}
          value="bus"
          onClick={onClickMenu}
        />
      </div>
      <div>
        {
          (selectMenu === "Q&A" && <QandA />) ||
          (selectMenu === "notice" && <Notice />) ||
          (selectMenu === "bus" && <Bus />)
        }
      </div>
    </div>
  );
}