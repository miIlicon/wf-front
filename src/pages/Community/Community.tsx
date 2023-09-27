import React, { useState } from "react";
import { Section } from "../../components/common/components";
import Intro from "../../components/community/Intro";
import InputBox from "../../components/community/InputBox";
import ChatList from "../../components/community/ChatList";

export default function Community() {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [autoUpdate, setAutoUpdate] = useState<boolean>(false);

  return (
    <Section>
      <Intro />
      <InputBox
        changeTrigger={setTrigger}
        trigger={trigger}
        setAutoUpdate={setAutoUpdate}
        autoUpdate={autoUpdate}
      />
      <ChatList
        changeTrigger={setTrigger}
        trigger={trigger}
        setAutoUpdate={setAutoUpdate}
        autoUpdate={autoUpdate}
      />
    </Section>
  );
}
