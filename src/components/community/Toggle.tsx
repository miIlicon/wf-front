/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { toogleProps } from "../../@types/typs";

export default function Toggle({ checked }: toogleProps) {
  return (
    <div
      css={css`
        width: 2.95em;
        height: 1.5em;
        border-radius: 30px;
        background-color: ${checked ? "#3182F6" : "#e4e4e4"};
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 1px;
          left: 2px;
          width: 1.35em;
          height: 1.35em;
          border-radius: 50%;
          background-color: rgb(255, 254, 255);
          transition: 0.3s;
          transform: ${checked ? "translateX(100%)" : "translateX(0%)"};
        `}
      ></div>
    </div>
  );
}
