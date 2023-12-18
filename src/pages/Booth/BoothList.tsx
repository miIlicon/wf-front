/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import API from "../../utils/api";
import { CardType, ListProps } from "../../@types/typs";
import CardList from "../../components/common/CardList";
import Notice from "../../components/common/Notice";

export default function BoothList({ type }: ListProps) {
  const size = 6;
  const [notice, setNotice] =
    useState<string>("아직 등록된 축제 부스가 없어요");

  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [dataList, setDataList] = useState<CardType[]>([]);

  const pageEnd = useRef<HTMLDivElement>(null);

  const getList = () => {
    API.get(`/api/v2/booth/list`, {
      params: { page: page, type: type, size: size },
    }).then((res) => {
      if (!totalPage) {
        setTotalPage(res.data.totalPage);
      }
      setDataList((prev) => [...prev, ...res.data.boothResList]);
      setIsLoaded(true);
    });
  };

  useEffect(() => {
    switch (type) {
      case "PUB":
        setNotice("아직 등록된 축제 주점이 없어요");
        break;
      case "FLEA_MARKET":
        setNotice("아직 등록된 축제 부스가 없어요");
        break;
      case "FOOD_TRUCK":
        setNotice("아직 등록된 푸드트럭이 없어요");
        break;
    }
  }, [type]);

  useEffect(() => {
    if (totalPage >= page) {
      getList();
    }
  }, [page]);

  useEffect(() => {
    if (isLoaded) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prev) => prev + 1);
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current!);
    }
  }, [isLoaded]);

  return (
    <div>
      {Boolean(dataList.length) || <Notice text={notice} />}
      <CardList dataList={dataList} category="booth" />
      <div ref={pageEnd} />
    </div>
  );
}
