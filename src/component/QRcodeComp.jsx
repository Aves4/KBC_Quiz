import React from "react";
import QRcode from "react-qr-code";
import { Link } from "react-router-dom";
const QRcodeComp = () => {
  const gamePage = "https://kbc-quiz-eight.vercel.app/mobilescreen";
  return (
    <div className="homescreen-container">
      <div>
        <h3>What is the purpose of React's useEffect hook?</h3>
        <div style={{ padding: "20px" }}>
          <div>
            <input
              type="radio"
              id="value1"
              value="To directly update the DOM"
              name="answer"
              className="each-option"
            />
            <label htmlFor="value1">To directly update the DOM</label>
          </div>
          <div>
            <input
              type="radio"
              id="value2"
              value="To manage side effects in a functional component"
              name="answer"
              className="each-option"
            />
            <label htmlFor="value2">
              To manage side effects in a functional component
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="value3"
              value="To define a component's state"
              name="answer"
              className="each-option"
            />
            <label htmlFor="value3">To define a component's state</label>
          </div>
          <div>
            <input
              type="radio"
              id="value4"
              value="To create reusable component logic"
              name="answer"
              className="each-option"
            />
            <label htmlFor="value4">To create reusable component logic</label>
          </div>
        </div>
      </div>
      <div className="qr-container">
        <QRcode value={gamePage} size={300} />
      </div>
      <h2>Scan The QR Code to start Quiz on Mobile.</h2>
    </div>
  );
};

export default QRcodeComp;
