/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import timetableData from "../../data/timetable.json";

export default function TimeTable() {
	const timetable = JSON.parse(JSON.stringify(timetableData));
	const [selected, setSelected] = useState<number>(0);
	const dateData = [
		{
			date: "11",
			day: "수요일"
		}, 
		{
			date: "12",
			day: "목요일"
		}
	]

  return (
		<div
			css={css`
				width: 100%;
				height: 100%;
				border-radius: 10px;
				font-family: "Pretendard-Medium";
				background-color: #1F2F4C;
				padding: 10px 0;

				display: flex;
				flex-direction: column;
				align-items: center;

				overflow-x: hidden;
				overflow-y: scroll;
				::-webkit-scrollbar {
					width: 5px;
				}
				::-webkit-scrollbar-thumb {
					background-color: transparent;
				}
			`}
		>
			<div
				css={css`
					margin-top: 15px;
					/* margin: 15px 0; */
				`}
			>
				<div
					css={css`
						display: flex;
						justify-content: center;
					`}
				>
					{dateData.map((data, i) => (
						<div
							css={css`
								display: flex;
								justify-content: center;
								align-items: center;
								flex-direction: column;
								color: ${ selected === i ? "#F7C946" : "white" };
								border-bottom: ${ selected === i ? "solid 2px #F7C946" : "none" };
								margin: 0 5px;
								padding: 0 10px 10px 10px;
								z-index: 5;
								cursor: pointer;
							`}
							onClick={() => setSelected(i)}
						>
							<span
								css={css`
									font-size: 14px;
									font-weight: 100;
								`}
							>
								{`${data.date}일`}
							</span>
							<span
								css={css`
									font-size: 16px;
									font-weight: 700;
								`}
							>
								{data.day}
							</span>
						</div>
					))}
				</div>
				<hr
					css={css`
						width: 250px;
						opacity: 0.5;
						transform: translate(0px, -9px);
						z-index: -5;
					`}
				/>
			</div>
			<img
				css={css`
					width: 25em;
					/* overflow-x: hidden; */
					transform: translate(0px, -15px);
				`}
				src={timetable[dateData[selected].date]}
				alt="시간표이미지"
			/>
		</div>
	);
}