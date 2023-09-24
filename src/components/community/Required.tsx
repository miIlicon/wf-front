/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

export default function Required() {
  return (
    <span
      css={css`
        font-family: "Pretendard-Medium";
        color: #fd5a5a;
        margin-left: 0.3em;
      `}
    >
      *
    </span>
  );
}
