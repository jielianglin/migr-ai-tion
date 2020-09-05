import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class About extends React.Component {
  render() {
    return (
      <div className="col-6">
        <p>
          <b> Jie Liang Lin (USA):</b>
          <br /> is an interdisciplinary artist and media anthropologist based
          in Berlin. Her work focuses on the intersections of new technologies
          and migration phenomena, and the mediation of migration experiences.
          <br />
          <br />
          <u>
            <i>Consultants: </i>
          </u>
          <br />
          <ul>
            <li>
              <b> Joanna Sleigh (CH)</b> on <u>Data Visualisation:</u> <br />
              is a visual and media anthropologist and Phd candidate at the ETH
              Zürich, Health Ethics and Policy Lab. Her work focuses on
              visualisation of health policy communication.
            </li>
            <br />
            <li>
              <b>Peggy Sylopp (DE) </b> on <u>Computer Science:</u> <br /> is an
              interdisciplinary artist and computer scientist. She is project
              manager of her citizens' project "Hear How You Like to Hear" at
              Frauenhofer IDMT Oldenburg.
            </li>
          </ul>
          <br />
        </p>
      </div>
    );
  }
}
