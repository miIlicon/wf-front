/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from "react-dom";
import { ModalPortalProps } from "../../@types/typs";

export default function ModalPortal({children, closePortal} : ModalPortalProps) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById("root-modal");
      ref.current = dom;
    }
  }, [])

  if (ref.current && mounted) {
    return createPortal(
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.8;
          `}
          onClick={closePortal}
        />
        <button 
              css={css`
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: transparent;
                color: white;
                border: none;
                height: 20px;
                font-size: 20px;
                padding: 0;
                cursor: pointer;
              `}
              onClick={closePortal}
            >
              X
        </button>
        <div
          css={css`
            display: flex;
            z-index: 10;
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            {children}
          </div>
          {/* <div
            css={css`
              display: inline-flex;
              justify-content: flex-end;
              width: 100%;
            `}
          >
            
          </div> */}
        </div>
      </div>,
      ref.current
    );
  }
  return null;
}
