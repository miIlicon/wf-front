/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import PageTitle from '../components/common/PageTitle';
import PageSubTitle from '../components/common/PageSubTitle';
import { contentTextProps, VideoProps, VideoListProps } from '../@types/typs';
import { Thumb } from '../components/common/Card';

const NameLabel = ({ text } : contentTextProps) => {
	return (
		<label
			css={css`
				width: 127px;
				height: 27px;
				color: #3182f6;
				background-color: rgba(49, 130, 246, 0.16);
				border: none;
				border-radius: 6px;
				font-size: 11px;
				font-weight: 600;

				display: flex;
				justify-content: center;
				align-items: center;
				font-family: "Pretendard-Regular";
			`}
		>
			{text}
		</label>
	)

}

const VideoCard = ({ title, subTitle, thumb, artist }: VideoProps) => {
	return (
		<div
			css={css`
				text-align: left;
				line-height: 10px;
			`}
		>
			<Thumb thumb={thumb} />
			<div
				css={css`
					margin-top: 17px;
				`}
			>
				<NameLabel text={artist} />
				<p
					css={css`
						font-size: 24px;
						font-weight: 700;
						font-style: normal;
						line-height: 29px;
						letter-spacing: -0.03em;
						color: #4E5968;

						margin: 11px 0;
					`}
				>
					{title}
				</p>
				<p
					css={css`
						font-size: 16px;
						font-weight: 500;
						font-style: normal;
						line-height: 19px;
						letter-spacing: -0.03em;
						color: #4E5968;

						margin: 0;
					`}
				>
					{subTitle}
				</p>
			</div>
		</div>
	);
	
}

const VideoCardList = ({dataList} : VideoListProps) => {
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
				<VideoCard title={data.title} subTitle={data.subTitle} artist={data.artist} thumb={data.thumb} />
			</div>
		))}
	</div>
	);
}

export default function FestivalVideoPage() {
	const videoListTest = [
		{
			title : "OO일차 아티스트가 왔다?",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			artist : "아티스트 이름",
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "OO일차 아티스트가 왔다?",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			artist : "아티스트 이름",
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "OO일차 아티스트가 왔다?",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			artist : "아티스트 이름",
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "OO일차 아티스트가 왔다?",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			artist : "아티스트 이름",
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "OO일차 아티스트가 왔다?",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			artist : "아티스트 이름",
			thumb : "https://img.stibee.com/70081_1679016813.jpg"
		},
		{
			title : "OO일차 아티스트가 왔다?",
			subTitle : "축제에 대한 간단한 한 줄 내용이 들어가요.",
			artist : "아티스트 이름",
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
			font-family: "Pretendard-Regular";
		`}
		>
			<PageTitle text="축제영상" />
			<PageSubTitle text="위드 페스티벌에서 다시 보고 싶거나 혹인 놓친 축제를 다시 연결시켜드려요." />
			
			<div
        css={css`
          margin-top: 33px;
        `}
      >
				<VideoCardList dataList={videoListTest} />
			</div>
		</div>
	);
}