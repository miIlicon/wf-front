/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import backButton from "../../src/images/prevButton.svg";
import linkButton from "../../src/images/nextButton.svg";
import { MenuProps, SubCategoryProps, contentTextProps } from "../@types/typs";
import { ReactComponent as Rocket } from "../images/rocket.svg";
import category from "../data/category.json";
import Search from "../components/main/Search";

const MainCategory = ({ text }: contentTextProps) => {
  return (
    <p
      css={css`
        font-family: "Pretendard-Medium";
        font-size: 17px;
        font-weight: 700;
        color: #000000;
        margin: 0 20px 0 0;
      `}
    >
      {text}
    </p>
  );
};

const SubCategory = ({ text, onClick }: SubCategoryProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        color: #4e5968;
        margin-bottom: 20px;
      `}
      onClick={onClick}
    >
      <p
        css={css`
          font-family: "Pretendard-Medium";
          margin: 0;
        `}
      >
        {text}
      </p>
      <img
        css={css`
          height: 15px;
          opacity: 0.23;
        `}
        src={linkButton}
        alt=""
      />
    </div>
  );
};

const Menu = ({ main, sub, onClick }: MenuProps) => {
  return (
    <div
      css={css`
        display: flex;
        margin: 30px 0;
      `}
    >
      <MainCategory text={main} />
      <div
        css={css`
          flex: 1;
        `}
      >
        {sub.map((menu) => (
          <SubCategory text={menu} onClick={() => onClick(main, menu)} />
        ))}
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div
      css={css`
        height: 85px;
        display: flex;
        background-color: #004770;
        justify-content: center;
        align-items: center;
      `}
    >
      <p
        css={css`
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          margin-right: 15px;
        `}
      >
        강대생 축제 이야기에 여러분을 초대합니다
      </p>
      <Rocket
        css={css`
          width: 1.8em;
          height: auto;
        `}
      />
    </div>
  );
};

export default function CategoryPage() {
  const navigate = useNavigate();
  const categoryList = JSON.parse(JSON.stringify(category));

  const handleClick = (main: string, sub: string) => {
    navigate(`/${categoryList[main]}`, { state: { menu: categoryList[sub] } });
  };

  return (
    <div
      css={css`
        position: absolute;
        width: 100vw;
        min-height: 100vh;
        top: 1;
        font-family: "Pretendard-Medium";
        margin: 0;
        background-color: #e5e8ef;
        overflow: hidden;
        overflow-x: hidden;
        z-index: 999;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin: 15px 10px;
        `}
      >
        <img
          src={backButton}
          alt=""
          onClick={() => navigate(-1)}
          css={css`
            width: 0.6em;
          `}
        />
        <p
          css={css`
            font-family: "Pretendard-Bold";
            font-size: 18px;
            margin: 0;
          `}
        >
          카테고리
        </p>
        <div></div>
      </div>
      {/* <Banner /> */}
      <div
        css={css`
          padding: 0 20px;
        `}
      >
        <div
          css={css`
            margin: 35px 0;
          `}
        >
          <Search />
        </div>
        <div>
          <Menu
            main="프로그램"
            sub={["학교주최 이벤트", "경기 일정/결과"]}
            onClick={handleClick}
          />
          <Menu
            main="축제부스"
            sub={["플리마켓", "푸드트럭", "축제주점"]}
            onClick={handleClick}
          />
          <Menu
            main="안내사항"
            sub={["Q&A", "공지사항", "달구지"]}
            onClick={handleClick}
          />
          <Menu main="대나무숲" sub={["대나무숲"]} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
