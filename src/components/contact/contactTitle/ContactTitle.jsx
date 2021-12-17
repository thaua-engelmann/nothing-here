import TitleAnimation from "../../UI/titleAnimation/TitleAnimation";

import React from "react";

const ContactTitle = () => {
  return (
    <div className="title">
      <TitleAnimation>c</TitleAnimation>
      <TitleAnimation>o</TitleAnimation>
      <TitleAnimation>n</TitleAnimation>
      <TitleAnimation>t</TitleAnimation>
      <TitleAnimation>a</TitleAnimation>
      <TitleAnimation>c</TitleAnimation>
      <TitleAnimation>t</TitleAnimation>
      <TitleAnimation cName="space">m</TitleAnimation>
      <TitleAnimation>e</TitleAnimation>
      <TitleAnimation>,</TitleAnimation>
    </div>
  );
};

export default ContactTitle;
