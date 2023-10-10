/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import PageSubTitle from "../components/common/PageSubTitle";
import CardList from "../components/common/CardList";
import DefaultButton from "../components/common/DefaultButton";
import API from "../utils/api";
import Notice from "../components/common/Notice";
import { Section } from "../components/common/components";
import CreateSection from "../components/common/CreateSection";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function ProgramPage() {
  const location = useLocation();
  const state = location.state as { menu: string };
  const [cookies, setCookie] = useCookies(["WF_ID"]);
  const [programList, setProgramList] = useState<any>([]);
  const [notice, setNotice] = useState<string>("진행 중인 이벤트가 없어요");
  const [selectMenu, setSelectMenu] = useState<string>(
    state ? state.menu : "EVENT"
  );

  const onClickButton = (value: string) => {
    setSelectMenu(value);
  };

  const getProgramInfo = async () => {
    await API.get(`/api/v2/program/list`, {
      params: { page: 0, type: selectMenu, size: 50 },
    }).then((res) => {
      setProgramList(res.data.programList);
    });
  };

  useEffect(() => {
    getProgramInfo();
    if (selectMenu === "EVENT") {
      setNotice("아직 등록된 이벤트가 없어요");
    } else if (selectMenu === "GAME") {
      setNotice("아직 등록된 경기 일정이 없어요");
    }
  }, [selectMenu]);

  useEffect(() => {
    setSelectMenu(state ? state.menu : "EVENT");
  }, [state]);

  return (
    <Section>
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

      {cookies.WF_ID && cookies.WF_ID.AT && cookies.WF_ID.RT && (
        <Link to={`/edit?type=${selectMenu}`}>
          <CreateSection />
        </Link>
      )}
      {programList.length ? (
        <CardList dataList={programList} category="program" />
      ) : (
        <Notice text={notice} />
      )}
    </Section>
  );
}
