/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Section } from "../../components/common/components";
import axios from "axios";

export default function VideoPost() {
  const [url, setUrl] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [state, setState] = useState<boolean>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);

    axios
      .get(`https://www.youtube.com/oembed?url=${event.target.value}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setImg(res.data.thumbnail_url);
        setState(true);
      })
      .catch((error) => {
        setState(false);
      });
  };

  return (
    <Section>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          a {
            color: black;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        `}
      >
        <input
          type="text"
          placeholder="영상 URL을 입력해주세요"
          onChange={(event) => handleChange(event)}
          value={url}
          css={css`
            margin-bottom: 1em;
          `}
        />
        {state && (
          <a
            href={url}
            target="_blank"
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <div
              css={css`
                font-family: pretendard-Medium;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                row-gap: 1em;
                width: 50%;
              `}
            >
              {title && <span> {title} </span>}
              {img && <img src={img} alt="유튜브 이미지" />}
            </div>
          </a>
        )}
        {!state && url.length !== 0 && (
          <span> 영상을 불러오는데 오류가 발생했어요! </span>
        )}
      </div>
    </Section>
  );
}
