/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import EventStatusButton from '../components/common/EventStatusButton';
import { contentTextProps } from '../@types/typs';
import Map from '../components/common/Map';

const TitleInput = () => {
	return (
		<input
			css={css`
				width: 638px;
				height: 40px;
				border: none;
				font-family: "Pretendard-Regular";
				font-size: 25px;
				font-weight: 800;
				color: #4E5968;
				outline: none;
				::placeholder,
				::-webkit-input-placeholder {
					font-style: normal;
					font-weight: 800;
					font-size: 25px;
					line-height: 30px;
					letter-spacing: -0.03em;
					color: #4E5968;
				}
				:-ms-input-placeholder {
					font-style: normal;
					font-weight: 800;
					font-size: 25px;
					line-height: 30px;
					letter-spacing: -0.03em;
					color: #4E5968;
				}
			`}

			placeholder='제목을 입력해주세요'
		>
		</input>
	);
}

const SubTitleInput = () => {
	return (
		<input
			css={css`
				width: 638px;
				height: 35px;
				border: none;
				font-family: "Pretendard-Regular";
				font-size: 17px;
				font-weight: 500;
				color: #4E5968;
				outline: none;
				::placeholder,
				::-webkit-input-placeholder {
					font-style: normal;
					font-weight: 500;
					font-size: 17px;
					line-height: 20px;
					letter-spacing: -0.03em;
					color: #4E5968;
				}
				:-ms-input-placeholder {
					font-style: normal;
					font-weight: 500;
					font-size: 17px;
					line-height: 20px;
					letter-spacing: -0.03em;
					color: #4E5968;
				}
			`}

			placeholder='소제목을 입력해주세요'
		>
		</input>
	);
}

const Label = ({text} : contentTextProps) => {
	return (
		<p
			css={css`
			font-family: "Pretendard-Regular";
			font-style: normal;
			font-weight: 800;
			font-size: 25px;
			line-height: 30px;
			letter-spacing: -0.03em;
			color: #4E5968;

			margin-bottom: 40px;
	`}
		>
			{text}
		</p>
	);
}

const Detail = () => {
	return (
		<textarea
			css={css`
				width: 1010px;
				height: 327px;
				font-family: "Pretendard-Regular";
				font-size: 18px;
				background: #EBECF0;
				border: none;
				border-radius: 21px;
				outline: none;
				padding: 27px;
			`}

			placeholder='상세 설명을 입력해주세요'
		/>
	);
}

const Button = ({text} : contentTextProps) => {
	return (
		<input
			css={css`
				width: 306px;
				height: 77px;
				color: #ffffff;
				background-color: #3182f6;
				border: none;
				border-radius: 10px;
				font-family: "Pretendard-Regular";
				font-style: normal;
				font-weight: 800;
				font-size: 25px;
				line-height: 30px;
				letter-spacing: -0.03em;
				cursor: pointer;
			`}

			type="submit"
			value={text}
		>
		</input>
	);
}

const PlusButton = () => {
	return (
		<div
			css={css`
				width: 60px;
				height: 60px;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 1px solid #6E6E6E;
				border-radius: 50%;
			`}
		>
			<p
				css={css`
					font-size: 45px;
				`}
			>
				+
			</p>
		</div>
	);
}

export default function Editor() {
	return (
		<div
			css={css`
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: "Pretendard-Regular";
				padding: 59px 455px;
			`}
		>
			<form>
				<div
					css={css`
						display: flex;
						margin-bottom: 70px;
					`}
				>
					<label
						css={css`
						width: 301px;
						height: 426px;
						display: flex;
						justify-content: center;
						align-items: center;

						background: #EBECF0;
						border-radius: 21px;
						cursor: pointer;
						margin-right: 70px;
					`}
						htmlFor="input-file"
					>
						<PlusButton />
					</label>
					<input
						css={css`
							display: none;
						`}
						type="file"
						id="input-file"
					/>
					<div
						css={css`
							height: 426px;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
						`}
					>
						<TitleInput />
						<SubTitleInput />
						<div
							css={css`
								width: 446px;
								display: flex;
								justify-content: space-between;

							`}
						>
							<label
								css={css`
									font-weight: 500;
									font-size: 17px;
									line-height: 20px;
									color: #4E5968;
									margin-right: 2px;
								`}
							>
								이벤트가 진행 중인가요?
							</label>
							<EventStatusButton isRunning={true} />
							<EventStatusButton isRunning={false} />
						</div>
						<Map />
					</div>
				</div>
				<div
					css={css`
						display: flex;
						flex-direction: column;
						margin-bottom: 40px;
					`}
				>
					<Label text="관련된 더 많은 사진을 보여드릴게요"/>
					<label
						css={css`
						width: 169px;
						height: 164px;
						display: flex;
						justify-content: center;
						align-items: center;
						background: #EBECF0;
						border-radius: 21px;
						cursor: pointer;
						margin-right: 70px;
					`}

						htmlFor="input-file"
					>
						<PlusButton />
					</label>
					<input
						css={css`
							display: none;
						`}
						type="file"
						id="input-file"
					/>
				</div>
				<div>
					<Label text="상세 설명"/>
					<Detail />
				</div>
				<div
					css={css`
						display: flex;
						justify-content: center;
						align-items: center;

						margin-top: 58px;
					`}
				>
					<Button text="이벤트 발행하기" />
				</div>
			</form>
		</div>
	);
}