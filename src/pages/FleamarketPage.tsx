/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import PageTitle from '../components/common/PageTitle';
import PageSubTitle from '../components/common/PageSubTitle';
import CardList from '../components/common/CardList';
import DefaultButton from '../components/common/DefaultButton';

export default function FleamarketPage() {
	const [selectMenu, setSelectMenu] = useState<string>("running");

	const onClickButton = (value : string) => {
		setSelectMenu(value);
	}

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
			margin-top: 59px;
		`}
		>
			<PageTitle text="플리마켓" />
			<PageSubTitle text="지금 현재 진행되고 있는 우리 학교 플리마켓에 대한 다양한 정보를 얻을 수 있어요." />
			<div
				css={css`
				margin-bottom: 77px;
			`}
			>	
				<DefaultButton text="활발하게 진행 중인 플리마켓" isSelect={"running" === selectMenu} value="running" onClick={onClickButton}/>
				<DefaultButton text="종료된 플리마켓" isSelect={"ended" === selectMenu} value="ended" onClick={onClickButton}/>
			</div>
			<CardList dataList={foodtruckListTest} isRunning={selectMenu === "running"}/>
		</div>
	);
}