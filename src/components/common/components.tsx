/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WrapperProps } from "../../@types/typs";

export const Section = ({ children }: WrapperProps) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
      `}
    >
      <section
        css={css`
          width: 63.5em;
          padding-left: 1em;
          padding-right: 1em;
        `}
      >
        {children}
      </section>
    </div>
  );
};
