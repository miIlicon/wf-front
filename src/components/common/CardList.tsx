/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { CardListProps } from '../../@types/typs';
import Card from './Card';

export default function CardList({dataList} : CardListProps) {
	return (
		<div
			css={css`
				width: 1065px;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
		`}
	>
		{dataList.map((data) => (
			<div
				css={css`
					margin: 18px 27px;
				`}
			>
				<Card title={data.title} subTitle={data.subTitle} isRunning={data.isRunning} thumb={data.thumb} />
			</div>
		))}
	</div>
	);
}