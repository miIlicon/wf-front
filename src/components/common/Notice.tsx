/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from "@emotion/react";
import { TextProps } from '../../@types/typs';

export default function Notice({ text } : TextProps) {
  return (
		<div
			css={css`
				margin-top: 50px;
			`}
		>
			<p
				css={css`
					font-family: "Pretendard-Regular";
					font-style: normal;
					font-weight: 700;
					font-size: 17px;
					line-height: 41px;
					color: #333D4B;
					letter-spacing: -0.03em;
				`}
			>
				{text}
			</p>
		</div>
	)
}
