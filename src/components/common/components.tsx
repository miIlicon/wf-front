/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WrapperProps } from "../../@types/typs";
import { useLocation } from "react-router-dom";

export const Section = ({ children }: WrapperProps) => {
  const path = useLocation().pathname;

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${path === "/community" && "#E5EBFB"};
        padding-top: 3em;
        box-sizing: border-box;
      `}
    >
      <section
        css={css`
          width: 63.5em;
          padding-left: 1em;
          padding-right: 1em;
          ${(path === "/inform" || path === "/booth" || path === "/program") &&
          "text-align:center;"}
        `}
      >
        {children}
      </section>
    </div>
  );
};
