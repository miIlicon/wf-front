import React, { ChangeEvent } from "react";

export interface WrapperProps {
  children: React.ReactNode;
}

export interface CardProps {
  id?: number;
  category?: string;
  title?: string;
  subTitle?: string;
  status?: boolean;
  thumb: string;
  isRunning?: boolean;
}

export interface CardListProps {
  dataList: any[];
  category: string;
  status?: boolean;
  isRunning?: boolean;
}

export interface VideoProps {
  title: string;
  subTitle: string;
  artist: string;
  thumb: string;
  videoUrl?: string;
}

export interface chatBoxProps {
  id: number;
  text: string;
}

export interface toogleProps {
  checked: boolean;
}

export interface VideoListProps {
  dataList: VideoProps[];
}

export interface EventStatusButtonProps {
  status?: boolean;
  isRunning?: boolean;
}

export interface titleProps {
  text: string;
  used?: string;
}

export interface eventProps {
  eventName?: string;
  eventType?: string;
}

export interface contentTextProps {
  text: string;
}

export interface ButtonProps {
  text: string;
  isSelect: boolean;
  value: string;
  onClick: (value: string) => void;
}

export interface TextProps {
  text: string;
  onClick?: (value: any) => void;
  onSubmit?: (value: any) => void;
}

export interface FileProps {
  files: [];
}

export interface readerProps {
  result: any;
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

export interface MapProps {
  lat?: number;
  lon?: number;
}

export interface ContentCardsProps {
  thumb: string;
  idx: number;
  dataList: string[];
}

export interface QandAProps {
  Q: string;
  A: string;
}

export interface ProfileProps {
  name: string;
  date: string;
}

export interface NoticeProps {
  icon: string;
  name: string;
  date: string;
  content: string;
}

export interface ImageProps {
  src: string;
}

export interface MenuProps {
  main: string;
  sub: string[];
  onClick: (main: string, sub: string) => void;
}

export interface SubCategoryProps {
  text: string;
  onClick: () => void;
}

export interface SearchResultProps {
  title: string;
  subTitle: string;
  thumb: string;
  state: boolean;
}

export interface ClickEventProps {
  onClick: () => void;
}
