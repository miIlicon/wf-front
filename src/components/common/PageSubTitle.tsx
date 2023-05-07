/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { contentTextProps } from "../../@types/typs";

export default function PageSubTitle({text} : contentTextProps) {
	return (
		<p
			css={css`
				font-size: 16px;
				font-weight: 500;
				font-family: "Pretendard-Regular";
				margin-bottom: 69px;
			`}
		>
			{text}
		</p>
	);
}