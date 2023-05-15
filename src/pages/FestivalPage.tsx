/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import PageTitle from "../components/common/PageTitle";
import PageSubTitle from "../components/common/PageSubTitle";
import CardList from "../components/common/CardList";
import DefaultButton from "../components/common/DefaultButton";
import API from "../utils/api";

export default function FestivalPage() {
  const [eventList, setEventList] = useState<any>([]);
  const [title, setTitle] = useState<string>("축제 정보");
  const [subTitle, setSubTitle] = useState<string>(
    "축제 정보에서 지금 현재 진행되고 있는 축제에 대한 다양한 정보를 얻을 수 있어요"
  );
  const [selectMenu, setSelectMenu] = useState<string>("festivalEvent");

  const onClickButton = (value: string) => {
    setSelectMenu(value);
    if (value === "event") {
      setTitle("축제 정보");
      setSubTitle(
        "축제 정보에서 지금 현재 진행되고 있는 축제에 대한 다양한 정보를 얻을 수 있어요."
      );
    } else if (value === "pub") {
      setTitle("축제 주점");
      setSubTitle(
        "축제 주점에서 지금 현재 진행되고 있는 축제 주점에 대한 정보를 얻을 수 있어요."
      );
    }
  };

  const getFestivalInfo = async () => {
		await API.get(
			`/api/v1/${selectMenu}/list`,
			{params: { "page": 0, "state": true}}
		)
		.then((res) => {
			setEventList(res.data.content);
		})
	};

	useEffect(() => {
		getFestivalInfo();
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
      <PageTitle text={title} />
      <PageSubTitle text={subTitle} />
      <div
        css={css`
          display: flex;
          width: 100%;
          margin-bottom: 4em;
          justify-content: center;
        `}
      >
        <DefaultButton
          text="축제 이벤트"
          isSelect={"festivalEvent" === selectMenu}
          value="festivalEvent"
          onClick={onClickButton}
        />
        <DefaultButton
          text="축제 주점"
          isSelect={"pub" === selectMenu}
          value="pub"
          onClick={onClickButton}
        />
      </div>
      <CardList dataList={eventList} />
    </div>
  );
}
