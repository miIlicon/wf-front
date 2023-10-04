/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ReactComponent as BannerArrow } from "../../images/bannerArrow.svg";
import rocket from "../../images/rocket.svg";
import lamb from "../../images/banner/lamb.svg";
import banner1 from "../../images/banner/banner1.png";
import banner2 from "../../images/banner/banner2.png";
import banner3 from "../../images/banner/banner3.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Banner() {
  const navigate = useNavigate();

  function Container({
    backgroundColor,
    backgroundImg,
    content,
    router,
    imgSrc,
    defaultImgSize,
  }: any) {
    return (
      <div
        css={css`
          height: 7em;
          border: solid;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: ${backgroundImg ? `url(${backgroundImg})` : ""};
          background-repeat: no-repeat;
          background-position: 80% 30%;
          background-color: ${backgroundColor ? backgroundColor : ""};
          color: white;
          letter-spacing: -0.03em;
        `}
      >
        <div
          css={css`
            display: flex;
            column-gap: 1em;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              row-gap: 0.6em;
            `}
          >
            <span
              css={css`
                display: block;
                font-size: 19.2px;
                font-family: "Pretendard-ExtraBold";

                @media (max-width: 479px) {
                  font-size: 15px;
                }
                @media all and (min-width: 480px) and (max-width: 767px) {
                  font-size: 16px;
                }
                @media all and (min-width: 768px) and (max-width: 1099px) {
                  font-size: 17px;
                }
                @media all and (min-width: 1100px) {
                  font-size: 18px;
                }
              `}
            >
              {content}
            </span>
            <div
              css={css`
                width: 100%;
                display: flex;
                justify-content: left;
                align-items: center;
                transition: 0.4s all;
                cursor: pointer;

                &:hover {
                  opacity: 80%;
                }
              `}
              onClick={() => navigate(`${router}`)}
            >
              <span
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: center;

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
                자세히 보러가기
              </span>
              <BannerArrow
                css={css`
                  path {
                    fill: white;
                  }
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
                  width: 0.9em;
                `}
              />
            </div>
          </div>
          {imgSrc && (
            <img
              src={imgSrc}
              alt="배너 부가 이미지"
              css={css`
                width: ${defaultImgSize}em;
                height: auto;

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
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Container
            backgroundImg={banner2}
            // backgroundColor={`#004F3C`}
            content={`다시 돌아온 대나무 숲을 이용해보세요`}
            router={`/detail`}
            imgSrc={lamb}
            defaultImgSize={"7"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Container
            backgroundImg={banner1}
            // backgroundColor={`#404040`}
            content={`지금 인기 있는 축제를 만나보세요`}
            router={`/detail`}
            // imgSrc={rocket}
            defaultImgSize={"5"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Container
            backgroundImg={banner3}
            content={`밀리콘 팀에 합류하고 싶으신가요?`}
            router={`/detail`}
            // imgSrc={lamb}
            defaultImgSize={"7"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
