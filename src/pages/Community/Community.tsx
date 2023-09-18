import React from "react";
import { Section } from "../../components/common/components";
import Intro from "../../components/community/Intro";
import ChatBox from "../../components/community/ChatBox";

export default function Community() {
  return (
    <Section>
      <Intro />
      <ChatBox />
    </Section>
  );
}
