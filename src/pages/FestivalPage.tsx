/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import PageTitle from '../components/common/PageTitle';
import PageSubTitle from '../components/common/PageSubTitle';
import CardList from '../components/common/CardList';
import { ButtonProps, CardListProps } from '../../src/@types/typs';

const Button = ({text, isSelect, value} : ButtonProps) => {
	return (
		<button
			css={css`
				width: 153px;
				height: 52px;
				color: ${isSelect ? "#FFFFFF" : "#4E5968"};
				background-color: ${isSelect ? "#3182F6" : "#F2F4F6"};
				border: none;
				border-radius: 8px;
				cursor: pointer;

				font-size: 16px;
				font-weight: 600;
				font-family: "Pretendard-Regular";
				font-style: normal;
				line-height: 19px;
				letter-spacing: -0.03em;

				margin: 0 26px;
			`}

			value={value}
		>
			{text}
		</button>
	);
}

export default function FestivalPage() {
	// const [eventList, setEventList] = useState<CardListProps>([]);
	const [selectMenu, setSelectMenu] = useState<string>("event");

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
				font-family: "Pretendard-Regular";
			`}
		>
			<PageTitle text="축제 정보" />
			<PageSubTitle text="축제 정보에서 지금 현재 진행되고 있는 축제에 대한 다양한 정보를 얻을 수 있어요." />
			<div
				css={css`
					margin-bottom: 77px;
				`}
			>
				<Button text="축제 이벤트" isSelect={"event" === selectMenu} value="event" />
				<Button text="축제 일정" isSelect={"schedule" === selectMenu} value="schedule" />
				<Button text="축제 주점" isSelect={"pub" === selectMenu} value="pub" />
			</div>
			<CardList dataList={eventListTest} />
		</div>
	);
}