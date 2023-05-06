/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { EventStatusButtonProps } from '../../@types/typs';

export default function EventStatusButton({isRunning} : EventStatusButtonProps) {
	const text = isRunning ? "진행 중인 이벤트" : "종료된 이벤트";
	return (
		<button
			css={css`
				width: 110px;
				height: 22px;
				color:#3182F6;
				background-color: ${isRunning ? 'rgba(49, 130, 246, 0.16)' : 'rgba(124, 124, 124, 0.4)'};
				border: none;
				border-radius: 5px;
				font-size: 11px;
				font-weight: 600;
			`}
		>
				{text}
		</button>
	);
}