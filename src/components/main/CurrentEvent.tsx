/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Title from "./Title";
import SlideCard from "./SlideCard";
import ViewTimeTable from "./ViewTimeTable";
import artistData from "../../data/artist.json";

export default function CurrentEvent() {
  const date = new Date();
  const [artist, setArtist] = useState<string[]>([]);

  useEffect(() => {
    artistData.map((item) => {
      const festivalDate = new Date(item.date);
      if (date.getFullYear() === festivalDate.getFullYear()) {
        if (date.getMonth() === festivalDate.getMonth()) {
          if (date.getDay() === festivalDate.getDay()) {
            setArtist(item.name);
          }
        }
      }
    });
  }, []);
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        margin-top: 3em;
      `}
    >
      <Title text="오늘의 아티스트" used="main" />
      {artist.map((name) => 
        <SlideCard eventName={name} eventType="축제 초청 가수" />
      )}
      <ViewTimeTable />
    </div>
  );
}
