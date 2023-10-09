/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { Section } from "../../components/common/components";
import EventStatusButton from "../../components/common/EventStatusButton";
import ContentTitle from "../../components/common/ContentTitle";
import ContentSubTitle from "../../components/common/ContentSubTitle";
import Map from "../../components/common/Map";
import ContentCards from "../../components/common/ContentCards";
import { DetailThumb } from "../../components/common/DetailCard";
import { useLocation } from "react-router-dom";
import API from "../../utils/api";
import axios from "axios";
import Welcome from "../../components/common/Welcome";

export default function Detail() {
  const location = useLocation();
  const [detailData, setDetailData] = useState({
    title: "",
    subTitle: "",
    content: "",
    mainFilePath: "",
    subFilePaths: [],
    latitude: 0,
    longitude: 0,
    operateStatus: "",
  });

  // const state = location.state as { category: string; id: number };
  // const category = state.category;
  const commentRef = useRef<HTMLDivElement | null>(null);
  // const id = state.id;

  const category = new URLSearchParams(location.search).get("category");
  const id = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    window.livereOptions = {
      refer: window.location.href,
    };

    (function (d, s) {
      let j: any,
        e: any = d.getElementsByTagName(s)[0];
      let LivereTower: any;

      if (typeof LivereTower === "function") {
        return;
      }

      j = d.createElement(s);
      j.src = "https://cdn-city.livere.com/js/embed.dist.js";
      j.async = true;

      e.parentNode.insertBefore(j, e);
    })(document, "script");

    // DOM 요소가 동적으로 추가되는 것을 감지하기 위해 MutationObserver을 사용합니다.
    const observer = new MutationObserver(function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          // DOM 요소가 추가되었을 때 실행할 코드를 여기에 작성합니다.
          console.log(commentRef.current);
          const AD = commentRef.current?.querySelector("#taboola-livere");
          if (AD) {
            commentRef.current?.removeChild(AD);
          }
        }
      }
    });

    if (commentRef.current) {
      const config = { childList: true }; // DOM의 자식 노드 변경 사항을 감지합니다.

      window.onload = function () {
        if (commentRef.current) {
          observer.observe(commentRef?.current, config);
        }
      };
    }
  }, []);

  const getDetailInfo = async () => {
    await API.get(`/api/v2/${category}/${id}`)
      .then((res) => {
        setDetailData(res.data);
      })
      .catch((error) => {
        alert(`알 수 없는 오류가 발생했어요!`);
      });
  };

  useEffect(() => {
    getDetailInfo();
  }, []);

  return (
    <Section>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          row-gap: 2.3em;

          @media (max-width: 479px) {
            font-size: 10px;
          }
          @media all and (min-width: 480px) and (max-width: 767px) {
            font-size: 12px;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 14px;
          }
          @media all and (min-width: 1100px) {
            font-size: 16px;
          }
        `}
      >
        <article
          css={css`
            display: flex;
            height: 16.7em;
            column-gap: 4.43em;
            box-sizing: border-box;
            margin-bottom: 4em;
            box-sizing: border-box;

            @media (max-width: 479px) {
              column-gap: 1em;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 10px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 14px;
            }
            @media all and (min-width: 1100px) {
              font-size: 16px;
            }
          `}
        >
          <DetailThumb thumb={detailData.mainFilePath} />
          <div
            css={css`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: left;
              text-align: left;
              row-gap: 0.85em;

              @media (max-width: 479px) {
                font-size: 10px;
              }

              @media all and (min-width: 480px) and (max-width: 767px) {
                font-size: 12px;
              }
              @media all and (min-width: 768px) and (max-width: 1099px) {
                font-size: 14px;
              }
              @media all and (min-width: 1100px) {
                font-size: 16px;
              }
            `}
          >
            <ContentTitle text={detailData.title} />
            <ContentSubTitle text={detailData.subTitle} />
            <EventStatusButton status={detailData.operateStatus} />
            <Welcome />
          </div>
        </article>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
            row-gap: 2.2em;
            width: 100%;
            overflow: auto;
            white-space: nowrap;
            height: 30em;
          `}
        >
          <ContentTitle text="이벤트 위치" />
          <Map lat={detailData.latitude} lon={detailData.longitude} />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
            row-gap: 2.2em;
            width: 85vw;
            overflow: auto;
            white-space: nowrap;

            @media (max-width: 479px) {
              font-size: 10px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 12px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 14px;
            }
            @media all and (min-width: 1100px) {
              font-size: 16px;
            }
          `}
        >
          <ContentTitle text="이벤트 사진" />
          <div
            css={css`
              display: flex;
              width: 100%;
              column-gap: 2em;

              @media (max-width: 479px) {
                font-size: 10px;
              }
              @media all and (min-width: 480px) and (max-width: 767px) {
                font-size: 12px;
              }
              @media all and (min-width: 768px) and (max-width: 1099px) {
                font-size: 14px;
              }
              @media all and (min-width: 1100px) {
                font-size: 16px;
              }
            `}
          >
            {detailData.subFilePaths.map((path: string, i: number) => (
              <ContentCards
                key={i}
                thumb={path}
                idx={i}
                dataList={detailData.subFilePaths}
              />
            ))}
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
            row-gap: 2.3em;
            line-height: 1.5em;
            white-space: pre-wrap;

            @media (max-width: 479px) {
              font-size: 13px;
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
          <ContentTitle text="이벤트 상세 설명" />
          <div
            css={css`
              display: flex;
              width: 100%;
              height: 20em;
              column-gap: 2em;
              background-color: #f8f8f8;
              box-sizing: border-box;
              padding: 1.5em;
              border-radius: 0.7em;
            `}
          >
            <span> {detailData.content}</span>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
            row-gap: 1em;

            @media (max-width: 479px) {
              font-size: 10px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 12px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 14px;
            }
            @media all and (min-width: 1100px) {
              font-size: 16px;
            }
          `}
        >
          <ContentTitle text="이벤트 댓글" />
          <div
            css={css`
              display: flex;
              width: 100%;
              height: 20em;
              column-gap: 2em;
              box-sizing: border-box;
              border-radius: 0.5em;

              #taboola-livere {
                display: none;
              }

              .livere-logo-top {
                display: none;
              }
            `}
            ref={commentRef}
          >
            <div
              id="lv-container"
              data-id="city"
              data-uid={process.env.REACT_APP_LIVERE_CODE}
              css={css`
                width: 100%;
                margin-bottom: 1em;
              `}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
