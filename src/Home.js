import React from "react";
import Description from "./Description";
import Datagraph from "./Datagraph";
import Caption from "./Caption";

export default function Home() {
  return (
    <div>
      <Datagraph />
      <Caption />
      <Description />
    </div>
  );
}
