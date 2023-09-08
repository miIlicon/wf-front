/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { ButtonProps } from "../@types/typs";
import PageTitle from "../components/common/PageTitle";
import QandA from "./Notice/QandA";

const Menu = ({ text, isSelect, value, onClick }: ButtonProps) => {
  return (
    <button
      css={css`
        opacity: ${isSelect ? "1" : "0.3"};
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        margin: 0 135px;
      `}
      onClick={() => onClick(value)}
      value={value}
    >
      <PageTitle text={text} />
    </button>
  );
}

export default function InformPage() {
  const [selectMenu, setSelectMenu] = useState<string>("Q&A");

  const onClickMenu = (value: string) => {
    setSelectMenu(value);
  };

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 59px 0;
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
          (selectMenu === "notice" && <div />) ||
          (selectMenu === "bus" && <div />)
        }
      </div>
    </div>
  );
}