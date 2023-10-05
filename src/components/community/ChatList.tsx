/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import arrowBottom from "../../images/community/arrowBottom.png";
import ChatBox from "./ChatBox";
import axios from "axios";
import thinking from "../../images/emoji/thinking.png";
import { communityStateProps } from "../../@types/typs";

export default function ChatList({
  changeTrigger,
  setAutoUpdate,
  trigger,
  autoUpdate,
}: communityStateProps) {
  const [chatData, setChatData] = useState<any[]>([]);
  const autoTimerObj = useRef<NodeJS.Timeout | null>(null);

  /** 트리거를 통해 대나무 숲을 업데이트를 해주는 렌더링 함수 */
  useEffect(() => {
    axios
      .get("/api/v2/bambooforest/list?page=0&size=10&sort=string")
      .then((res: any) => {
        setChatData(res.data.forestResList);
      });
  }, [trigger]);

  /** 대나무 숲 자동 업데이트를 위한 렌더링 함수 */
  useEffect(() => {
    if (autoUpdate) {
      autoTimerObj.current = setInterval(() => {
        axios
          .get("/api/v2/bambooforest/list?page=0&size=10&sort=string")
          .then((res: any) => {
            setChatData(res.data.forestResList);
            console.log(res.data.forestResList);
          });
      }, 4000);
    } else {
      // 컴포넌트가 언마운트되거나, autoUpdate 값이 false로 변경될 때 인터벌을 정리해줘야해요
      clearInterval(autoTimerObj.current as NodeJS.Timeout);
    }

    // 컴포넌트 언마운트시에 인터벌을 정리해줘야해요
    return () => {
      clearInterval(autoTimerObj.current as NodeJS.Timeout);
    };
  }, [autoUpdate]);

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
        {chatData.length >= 1 ? (
          chatData.map((item) => {
            return <ChatBox key={item.id} id={item.id} text={item.content} />;
          })
        ) : (
          <div
            css={css`
              margin-left: auto;
              margin-right: auto;

              display: flex;
              justify-content: center;
              align-items: center;
              column-gap: 0.5em;
            `}
          >
            <img
              src={thinking}
              alt="생각하는 이모지"
              css={css`
                width: 1.4em;
              `}
            />
            <span
              css={css`
                font-family: "Pretendard-Regular";
                color: #8d96a1;
              `}
            >
              아쉽게도 아직 등록된 대나무숲 게시글이 없어요
            </span>
          </div>
        )}
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
