/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { contentTextProps } from "../../@types/typs";

export default function PageTitle({text} : contentTextProps) {
	return (
		<h1
			css={css`
				font-size: 34px;
				font-family: "Pretendard-Regular";
				margin-bottom: 49px;
			`}
		>
			{text}
		</h1>
	);
}