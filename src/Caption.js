import React from "react";
import "./Caption.css";

export default function Caption() {
  return (
    <div className="Caption">
      <div className="Datagraph">
        <p>
          <i>
            <u> above:</u> visualization of computer vision word classification
            system{" "}
          </i>{" "}
        </p>
      </div>
      <br />

      <div className="Icons">
        <p>
          <span className="dot">.</span>upload <br />
          <span className="dot">.</span>trace <br />
          <span className="dot">.</span>tag <br />
        </p>
      </div>
    </div>
  );
}
