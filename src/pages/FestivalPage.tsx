/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import PageTitle from "../components/common/PageTitle";
import PageSubTitle from "../components/common/PageSubTitle";
import CardList from "../components/common/CardList";
import DefaultButton from "../components/common/DefaultButton";
import API from "../utils/api";
import Notice from "../components/common/Notice";

export default function FestivalPage() {
  const [programList, setProgramList] = useState<any>([]);
  const [notice, setNotice] = useState<string>("진행 중인 이벤트가 없어요");
  const [selectMenu, setSelectMenu] = useState<string>("EVENT");

  const onClickButton = (value: string) => {
    setSelectMenu(value);
    if (value === "EVENT") {
      setNotice("진행 중인 이벤트가 없어요");
    } else if (value === "GAME") {
      setNotice("진행 중인 경기가 없어요");
    }
  };

  const getProgramInfo = async () => {
		await API.get(
			`/api/v2/program/list`,
			{params: { "page": 0, "type": selectMenu}}
		)
		.then((res) => {
			setProgramList(res.data.content);
		})
	};

	useEffect(() => {
		getProgramInfo();
	}, [selectMenu])

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2em;
      `}
    >
      <PageTitle text="프로그램" />
      <PageSubTitle text="프로그램에서 지금 현재 진행되고 있는 축제에 대한 다양한 정보를 얻을 수 있어요" />
      <div
        css={css`
          display: flex;
          width: 100%;
          margin-bottom: 4em;
          justify-content: center;
        `}
      >
        <DefaultButton
          text="학교 주최 이벤트"
          isSelect={"EVENT" === selectMenu}
          value="EVENT"
          onClick={onClickButton}
        />
        <DefaultButton
          text="경기 일정/결과"
          isSelect={"GAME" === selectMenu}
          value="GAME"
          onClick={onClickButton}
        />
      </div>
      {
        programList.length 
          ? <CardList dataList={programList} category="program" /> 
          : <Notice text={notice} />
      }
    </div>
  );
}
