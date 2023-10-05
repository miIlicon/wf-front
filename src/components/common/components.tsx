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
          width: 100%;
          max-width: 63.5em;
          padding-left: 1em;
          padding-right: 1em;
          ${(path === "/inform" || path === "/booth" || path === "/program") &&
          "text-align:center;"}

          @media (max-width: 479px) {
            font-size: 13px;
            box-sizing: border-box;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 14px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 15px;
          }
          @media all and (min-width: 1100px) {
            font-size: 16px;
          }
        `}
      >
        {children}
      </section>
    </div>
  );
};
