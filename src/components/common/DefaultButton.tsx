/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ButtonProps } from "../../@types/typs";

export default function DefaultButton({text, isSelect, value, onClick} : ButtonProps) {
    return (
		<button
			css={css`
				width: 237px;
				height: 52px;
				color: ${isSelect ? "white" : "black"};
				background-color: ${isSelect ? "#3182F6" : "#F2F4F6"};
				border: none;
				border-radius: 8px;
				font-size: 16px;
				font-weight: 600;
				font-family: "Pretendard-Regular";
				font-style: normal;
				line-height: 19px;
				letter-spacing: -0.03em;
				cursor: pointer;
				margin: 0 6px;
			`}

			onClick={() => onClick(value)}
			value={value}
		>
			{text}
		</button>
	);
}