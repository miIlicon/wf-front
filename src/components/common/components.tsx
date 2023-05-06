/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WrapperProps } from "../../@types/typs";

export const Section = ({ children }: WrapperProps) => {
  return (
    <section
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    >
      {children}
    </section>
  );
};
