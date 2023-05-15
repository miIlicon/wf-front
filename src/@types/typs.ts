import React, { ChangeEvent } from 'react';

export interface WrapperProps {
  children: React.ReactNode;
}

export interface CardProps {
  id?: number;
  title?: string;
  subTitle?: string;
  isRunning?: boolean;
  thumb: string;
}

export interface CardListProps {
  dataList: any[];
  isRunning?: boolean;
}

export interface VideoProps {
  title: string;
  subTitle: string;
  artist: string;
  thumb: string;
  videoUrl?: string;
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
  onClick: (value : string) => void;
}

export interface TextProps {
  text: string;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface TextareaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}