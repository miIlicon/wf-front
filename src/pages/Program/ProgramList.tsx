/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { CardType, ListProps } from "../../@types/typs";
import API from "../../utils/api";
import Notice from "../../components/common/Notice";
import CardList from "../../components/common/CardList";

export default function ProgramList({ type }: ListProps) {
  const size = 6;
  const [notice, setNotice] =
    useState<string>("아직 등록된 축제 안내가 없어요");

  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [dataList, setDataList] = useState<CardType[]>([]);

  const pageEnd = useRef<HTMLDivElement>(null);

  const getList = () => {
    API.get(`/api/v2/program/list`, {
      params: { page: page, type: type, size: size },
    }).then((res) => {
      if (!totalPage) {
        setTotalPage(res.data.totalPage);
      }
      setDataList((prev) => [...prev, ...res.data.programList]);
      setIsLoaded(true);
    });
  };

  useEffect(() => {
    if (type === "EVENT") {
      setNotice("아직 등록된 축제 안내가 없어요");
    } else if (type === "GAME") {
      setNotice("아직 등록된 경기 일정이 없어요");
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
      <CardList dataList={dataList} category="program" />
      <div ref={pageEnd} />
    </div>
  );
}
