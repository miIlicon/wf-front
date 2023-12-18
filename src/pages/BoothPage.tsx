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
import BoothList from "./Booth/BoothList";

export default function BoothPage() {
  const location = useLocation();
  const state = location.state as { menu: string };
  const [cookies, setCookie] = useCookies(["WF_ID"]);
  const [selectMenu, setSelectMenu] = useState<string>(
    state ? state.menu : "FLEA_MARKET"
  );

  const onClickButton = (value: string) => {
    setSelectMenu(value);
  };

  useEffect(() => {
    setSelectMenu(state ? state.menu : "FLEA_MARKET");
  }, [state]);

  return (
    <Section>
      <PageTitle text="축제 부스" />
      <PageSubTitle text="축제 부스에서 현재 진행되고 있는 축제에 대한 다양한 정보를 얻을 수 있어요" />
      <div
        css={css`
          display: flex;
          width: 100%;
          margin-bottom: 4em;
          justify-content: center;
        `}
      >
        <DefaultButton
          text="축제 부스"
          isSelect={"FLEA_MARKET" === selectMenu}
          value="FLEA_MARKET"
          onClick={onClickButton}
        />
        <DefaultButton
          text="푸드트럭"
          isSelect={"FOOD_TRUCK" === selectMenu}
          value="FOOD_TRUCK"
          onClick={onClickButton}
        />
        <DefaultButton
          text="축제 주점"
          isSelect={"PUB" === selectMenu}
          value="PUB"
          onClick={onClickButton}
        />
      </div>
      {cookies.WF_ID && cookies.WF_ID.AT && cookies.WF_ID.RT && (
        <Link to={`/edit?type=${selectMenu}`}>
          <CreateSection />
        </Link>
      )}
      {selectMenu === "FLEA_MARKET" && <BoothList type="FLEA_MARKET" />}
      {selectMenu === "FOOD_TRUCK" && <BoothList type="FOOD_TRUCK" />}
      {selectMenu === "PUB" && <BoothList type="PUB" />}
    </Section>
  );
}
