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
        margin-top: 7em;
      `}
    >
      <section
        css={css`
          width: 63.12em;
        `}
      >
        {children}
      </section>
    </div>
  );
};
