/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import PageTitle from '../components/common/PageTitle';
import PageSubTitle from '../components/common/PageSubTitle';
import { ButtonProps } from '../@types/typs';
import CardList from '../components/common/CardList';

const Button = ({text, isSelect, value} : ButtonProps) => {
	return (
		<button
			css={css`
				width: 200px;
				height: 41px;
				color: ${isSelect ? "white" : "black"};
				background-color: ${isSelect ? "#3182F6" : "#F2F4F6"};
				border: none;
				border-radius: 8px;
				font-size: 13px;
				font-weight: 600;
				font-family: "Pretendard-Regular";
				cursor: pointer;
				margin: 0 6px;
			`}

			value={value}
		>
			{text}
		</button>
	);
}

export default function FoodtruckPage() {
	const [selectMenu, setSelectMenu] = useState<string>("running");

	const foodtruckListTest = [
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
			<PageTitle text="푸드트럭" />
			<PageSubTitle text="지금 현재 진행되고 있는 우리 학교 푸드트럭에 대한 다양한 정보를 얻을 수 있어요." />
			<div
				css={css`
				margin-bottom: 67px;
			`}
			>
				<Button text="활발하게 진행 중인 푸드트럭" isSelect={"running" === selectMenu} value="running" />
				<Button text="종료된 푸드트럭" isSelect={"ended" === selectMenu} value="ended" />
			</div>
			<CardList dataList={foodtruckListTest} />
		</div>
	);
}