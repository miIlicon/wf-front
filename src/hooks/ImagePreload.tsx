import React from "react";
import { PreloadImageProps } from "../@types/typs";

export function ImagePreload(src: any) {
  let img = new Image();
  img.src = src;

  return img;
}
