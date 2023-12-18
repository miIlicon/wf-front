/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import PageSubTitle from "../components/common/PageSubTitle";
import DefaultButton from "../components/common/DefaultButton";
import { Section } from "../components/common/components";
import CreateSection from "../components/common/CreateSection";
import { useCookies } from "react-cookie";
import ProgramList from "./Program/ProgramList";

export default function ProgramPage() {
  const location = useLocation();
  const state = location.state as { menu: string };
  const [cookies, setCookie] = useCookies(["WF_ID"]);
  const [selectMenu, setSelectMenu] = useState<string>(
    state ? state.menu : "EVENT"
  );

  const onClickButton = (value: string) => {
    setSelectMenu(value);
  };

  useEffect(() => {
    setSelectMenu(state ? state.menu : "EVENT");
  }, [state]);

  return (
    <Section>
      <PageTitle text="축제 정보" />
      <PageSubTitle text="축제 정보에서 지금 현재 진행되고 있는 축제에 대한 다양한 정보를 얻을 수 있어요" />
      <div
        css={css`
          display: flex;
          width: 100%;
          margin-bottom: 4em;
          justify-content: center;
        `}
      >
        <DefaultButton
          text="축제 안내"
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
      {selectMenu === "EVENT" && <ProgramList type="EVENT" />}
      {selectMenu === "GAME" && <ProgramList type="GAME" />}
    </Section>
  );
}
