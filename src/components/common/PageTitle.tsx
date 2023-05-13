/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { contentTextProps } from "../../@types/typs";

export default function PageTitle({text} : contentTextProps) {
	return (
		<h1
			css={css`
				font-size: 34px;
				font-weight: 700;
				font-family: "Pretendard-Regular";
				font-style: normal;
				line-height: 41px;
				letter-spacing: -0.03em;
				color: #333D4B;
				margin-bottom: 49px;
			`}
		>
			{text}
		</h1>
	);
}