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

export default function BoothPage() {
  const location = useLocation();
  const state = location.state as { menu: string };
  const [BoothList, setFleamarketList] = useState<any>([]);
  const [selectMenu, setSelectMenu] = useState<string>(
    state ? state.menu : "PUB"
  );
  const [notice, setNotice] = useState<string>("진행 중인 축제 주점이 없어요");

  const onClickButton = (value: string) => {
    setSelectMenu(value);
  };

  const getFleamarket = async () => {
    await API.get("/api/v2/booth/list", {
      params: { page: 0, type: selectMenu, size: 6 },
    }).then((res) => {
      setFleamarketList(res.data.boothResList);
    });
  };

  useEffect(() => {
    getFleamarket();
    switch (selectMenu) {
      case "PUB":
        setNotice("아직 등록된 축제 주점이 없어요");
        break;
      case "FLEA_MARKET":
        setNotice("아직 등록된 플리마켓이 없어요");
        break;
      case "FOOD_TRUCK":
        setNotice("아직 등록된 푸드트럭이 없어요");
        break;
    }
  }, [selectMenu]);

  useEffect(() => {
    setSelectMenu(state ? state.menu : "PUB");
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
          text="축제 주점"
          isSelect={"PUB" === selectMenu}
          value="PUB"
          onClick={onClickButton}
        />
        <DefaultButton
          text="플리마켓"
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
      </div>
      {sessionStorage.getItem("accessToken") && (
        <Link to={`/edit?type=${selectMenu}`}>
          <CreateSection />
        </Link>
      )}
      {BoothList.length ? (
        <CardList dataList={BoothList} category="booth" />
      ) : (
        <Notice text={notice} />
      )}
    </Section>
  );
}
