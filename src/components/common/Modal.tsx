/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { createPortal } from "react-dom";
import { ModalPortalProps } from "../../@types/typs";

export default function Modal({ children, closePortal } : ModalPortalProps) {
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
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				position: fixed;
				top: 0;
				left: 0;
				z-index: 999;
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 25em;
					height: 35em;
					background-color: #ebecf0;
					border-radius: 20px;
					filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.16));
					padding: 1.5em;
				`}
			>
				{children}
				<button
					css={css`
						font-family: "Pretendard-Medium";
						border: none;
						width: 5em;
						padding: 0.7em;
						margin-top: 1.3em;

						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 7px;
						background-color: #3182f6;
						color: white;
						cursor: pointer;
						@media (max-width: 479px) {
              font-size: 11px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 13px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 14px;
            }
            @media all and (min-width: 1100px) {
              font-size: 14px;
            }
					`}
					onClick={closePortal}
				>
					닫기
				</button>
			</div>
			
		</div>,
		ref.current
		);
	}
	return null;
}