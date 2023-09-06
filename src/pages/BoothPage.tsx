/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import PageTitle from "../components/common/PageTitle";
import PageSubTitle from "../components/common/PageSubTitle";
import CardList from "../components/common/CardList";
import DefaultButton from "../components/common/DefaultButton";
import API from "../utils/api";
import Notice from "../components/common/Notice";

export default function BoothPage() {
  const [BoothList, setFleamarketList] = useState<any>([]);
  const [selectMenu, setSelectMenu] = useState<string>("PUB");
  const [notice, setNotice] = useState<string>("진행 중인 축제 주점이 없어요");

  const onClickButton = (value: string) => {
    setSelectMenu(value);
    switch (value) {
      case "PUB" :
        setNotice("진행 중인 축제 주점이 없어요");
        break;
      case "FLEAMARKET":
        setNotice("진행 중인 플리마켓이 없어요");
        break;
      case "FOODTRUCK":
        setNotice("진행 중인 푸드트럭이 없어요");
        break;
    }
  };

	const getFleamarket= async () => {
		await API.get(
			"/api/v2/booth/list",
			{params: { "page": 0, "type": selectMenu}}
		)
		.then((res) => {
			setFleamarketList(res.data.content);
		})
	};

  useEffect(() => {
		getFleamarket();
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
          isSelect={"FLEAMARKET" === selectMenu}
          value="FLEAMARKET"
          onClick={onClickButton}
        />
        <DefaultButton
          text="푸드트럭"
          isSelect={"FOODTRUCK" === selectMenu}
          value="FOODTRUCK"
          onClick={onClickButton}
        />
      </div>
      {
        (BoothList.length < 1)
          ? <Notice text= {notice} />
          : <CardList
              dataList={BoothList}
              category="booth"
            />
      }
    </div>
  );
}
