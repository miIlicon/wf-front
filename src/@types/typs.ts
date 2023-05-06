import React from 'react';

export interface WrapperProps {
  children: React.ReactNode;
}

export interface CardProps {
  title?: string;
  subTitle?: string;
  thumb: string;
}

export interface EventStatusButtonProps {
	isRunning: boolean;
}