import React from 'react';

export interface WrapperProps {
  children: React.ReactNode;
}

export interface CardProps {
  title?: string;
  subTitle?: string;
  isRunning?: boolean;
  thumb: string;
}

export interface CardListProps {
  dataList: CardProps[];
}

export interface VideoProps {
  title: string;
  subTitle: string;
  artist: string;
  thumb: string;
}

export interface VideoListProps {
  dataList: VideoProps[];
}

export interface EventStatusButtonProps {
	isRunning: boolean;
}

export interface contentTextProps {
    text: string;
}

export interface ButtonProps {
	text: string;
	isSelect: boolean;
	value: string;
}