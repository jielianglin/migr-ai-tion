import React from "react";
import Description from "./Description";
import Datagraph from "./Datagraph";
import Caption from "./Caption";
import Steps from "./Steps";

export default function Home() {
  return (
    <div>
      <Steps />
      <Datagraph />
      <Caption />
      <Description />
    </div>
  );
}
