import React from "react";
import "./News.css";

const NewsCard = ({
  date = "01.07.2025",
  description = [
    "COMPLETE 10 MONTHS INTERNSHIP FROM SANDISK",
    "SYSTEM DESIGN VERIFICATION ENGINEERING",
  ],
}) => {
  return (
    <div className="news-card">
      <div className="news-date">{date}</div>
      <div className="news-content">
        {description.map((item, index) => (
          <p key={index} className="card-line">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
