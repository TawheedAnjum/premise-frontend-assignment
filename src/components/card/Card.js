import React from "react";
import boldtIcon from "../../assets/images/boltIcon.svg";

function Card(props) {
  let cardHeader = "";
  if (props.cardData.type == "manual") {
    cardHeader = <div className="manualHeader">Manual Origin</div>;
  } else {
    cardHeader = (
      <div className="autinatedHeader">
        <img src={boldtIcon} className="headerIcon" /> Automated Origin
      </div>
    );
  }
  return (
    <div className="card">
      <div className="cardInner">
        <div className="cardHeader">{cardHeader}</div>
        <div className="cardBody">
          <div>
            <h3 className="title">{props.cardData.title}</h3>
            <h4 className="subTitle">{props.cardData.intents} Intents</h4>
          </div>
          <div>
            <button className="button view-btn mr-2">View</button>
            <button className="button remove-btn">Remove</button>
          </div>
        </div>
        <div className="cardFooter">Last Uploaded Jan 23, 2021@4.32am</div>
      </div>
    </div>
  );
}

export default Card;
