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