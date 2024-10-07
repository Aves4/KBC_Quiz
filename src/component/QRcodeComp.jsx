import React from "react";
import QRcode from "react-qr-code";
import { Link } from "react-router-dom";
const QRcodeComp = () => {
  const gamePage = "https://kbc-quiz-eight.vercel.app/mobilescreen";
  return (
    <div className="homescreen-container">
      <div className="qr-container">
        <QRcode value={gamePage} size={300} />
      </div>
      <h2>Scan The QR Code to start Quiz on Mobile.</h2>
      <h3>OR</h3>
      <Link to="/mainscreen">
        <button className="start-btn">Start Quiz on Desktop</button>
      </Link>
    </div>
  );
};

export default QRcodeComp;
