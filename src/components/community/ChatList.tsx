/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import arrowBottom from "../../images/community/arrowBottom.png";
import ChatBox from "./ChatBox";
import axios from "axios";

export default function ChatList() {
  const [chatData, setChatData] = useState<any[]>([]);

  useEffect(() => {
    setInterval(function () {
    axios
      .get("/api/v2/bambooforest/list?page=0&size=10&sort=string")
      .then((res: any) => {
        setChatData(res.data.forestResList);
      });
    }, 4000);
  }, []);

  useEffect(() => {
    console.log(chatData);
  }, [chatData]);
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        margin-top: 2em;
        margin-bottom: 2em;
        border-radius: 1em;
        background-color: white;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          padding: 1.7em 1.3em 1.7em 1.3em;
          display: flex;
          flex-direction: column;
          row-gap: 1.5em;
        `}
      >
        {chatData.length > 1 &&
          chatData.map((item) => {
            return <ChatBox key={item.id} id={item.id} text={item.content} />;
          })}
      </div>

      <div
        css={css`
          width: 100%;
          padding: 0;
          border: solid;
          border-bottom: 0;
          border-left: 0;
          border-right: 0;

          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: auto;
          margin-bottom: 1em;

          border-color: rgba(192, 192, 192, 0.5);
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 0.5em;
            padding-top: 1em;
            cursor: pointer;
          `}
        >
          <img
            src={arrowBottom}
            alt="대화 더보기"
            css={css`
              width: 0.9em;
            `}
          />
          <span> 대화 더보기</span>
        </div>
      </div>
    </div>
  );
}
