import React from "react";
import { Section } from "../../components/common/components";
import Intro from "../../components/community/Intro";
import InputBox from "../../components/community/InputBox";
import ChatList from "../../components/community/ChatList";

export default function Community() {
  return (
    <Section>
      <Intro />
      <InputBox />
      <ChatList />
    </Section>
  );
}
