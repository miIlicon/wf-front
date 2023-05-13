/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import PageTitle from '../components/common/PageTitle';
import PageSubTitle from '../components/common/PageSubTitle';
import CardList from '../components/common/CardList';
import DefaultButton from '../components/common/DefaultButton';

export default function FestivalPage() {
	// const [eventList, setEventList] = useState<CardListProps>([]);
	const [title, setTitle] = useState<string>("축제 정보");
	const [subTitle, setSubTitle] = useState<string>("축제 정보에서 지금 현재 진행되고 있는 축제에 대한 다양한 정보를 얻을 수 있어요.");
	const [selectMenu, setSelectMenu] = useState<string>("event");

	const onClickButton = (value : string) => {
		setSelectMenu(value);
		if (value === "event") {
			setTitle("축제 정보");
			setSubTitle("축제 정보에서 지금 현재 진행되고 있는 축제에 대한 다양한 정보를 얻을 수 있어요.");
		}
		else if (value === "pub") {
			setTitle("축제 주점");
			setSubTitle("축제 주점에서 지금 현재 진행되고 있는 축제 주점에 대한 정보를 얻을 수 있어요.");
		}
	}

	const eventListTest = [
		{
			title : "축제 이름은 무엇일까요",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			isRunning : true,
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "축제 이름은 무엇일까요",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			isRunning : true,
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "축제 이름은 무엇일까요",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			isRunning : false,
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "축제 이름은 무엇일까요",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			isRunning : true,
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "축제 이름은 무엇일까요",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			isRunning : false,
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "축제 이름은 무엇일까요",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			isRunning : true,
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		}
	];

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 59px;
			`}
		>
			<PageTitle text={title} />
			<PageSubTitle text={subTitle} />
			<div
				css={css`
					margin-bottom: 77px;
				`}
			>
				<DefaultButton text="축제 이벤트" isSelect={"event" === selectMenu} value="event" onClick={onClickButton}/>
				<DefaultButton text="축제 주점" isSelect={"pub" === selectMenu} value="pub" onClick={onClickButton}/>
			</div>
			<CardList dataList={eventListTest} />
		</div>
	);
}