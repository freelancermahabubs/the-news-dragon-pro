import React from "react";
import QZone1 from "../../../assets/qZone1.png";
import QZone2 from "../../../assets/qZone2.png";
import QZone3 from "../../../assets/qZone3.png";
const QZone = () => {
  return (
    <div className="bg-secondary text-center py-4 my-4">
      <h2>QZone</h2>
      <div>
        <img src={QZone1} alt="QZone1" />
        <img src={QZone2} alt="QZone2" />
        <img src={QZone3} alt="QZone3" />
      </div>
    </div>
  );
};

export default QZone;
