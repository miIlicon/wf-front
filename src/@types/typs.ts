import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface WrapperProps {
  children: React.ReactNode;
}

export interface CardProps {
  id?: number;
  category?: string;
  title?: string;
  subTitle?: string;
  status?: string | boolean;
  thumb: string;
  isRunning?: boolean;
}

export interface CardListProps {
  dataList: any[];
  category: string;
  status?: string | boolean;
  isRunning?: boolean;
}

export interface VideoProps {
  title: string;
  subTitle: string;
  artist: string;
  thumb: string;
  videoUrl?: string;
}

export interface communityStateProps {
  trigger: boolean;
  changeTrigger: Dispatch<SetStateAction<boolean>>;
  autoUpdate: boolean;
  setAutoUpdate: Dispatch<SetStateAction<boolean>>;
}

export interface chatBoxProps {
  id?: number;
  text?: string;
  changeTrigger?: Dispatch<SetStateAction<boolean>>;
  trigger?: boolean;
}

export interface toogleProps {
  checked: boolean;
}

export interface VideoListProps {
  dataList: VideoProps[];
}

export interface EventStatusButtonProps {
  status?: string | boolean;
  isRunning?: boolean;
  used?: string;
}

export interface titleProps {
  text: string;
  used?: string;
}

export interface DateProps {
  sDate: Date;
  eDate: Date;
  setSDate: Dispatch<SetStateAction<Date>>;
  setEDate: Dispatch<SetStateAction<Date>>;
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

export interface PreloadImageProps {
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
  id: number;
  title: string;
  subTitle: string;
  mainFilePath: string;
  status: string;
  onClick?: () => void;
}

export interface ClickEventProps {
  onClick: () => void;
}

export interface NoticeSubmitProps {
  value: string;
	onClick: () => void;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface SearchModalProps {
  path: string;
  children: React.ReactNode;
}

export interface EventTemplateProps {
  text: string;
  type: string;
}

export interface ModalPortalProps {
  children: JSX.Element;
  closePortal: () => void;
}
