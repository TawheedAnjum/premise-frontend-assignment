import React, { Component } from "react";
import Card from "../components/card/Card";
import "../styles/cardContainer.css";

export class CradGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  cardData = [
    { type: "automated", title: "From Skills", intents: 33 },
    { type: "manual", title: "Skill Name", intents: 20 },
    { type: "manual", title: "From Skills", intents: 20 },
    { type: "manual", title: "Skill Name", intents: 15 },
    { type: "automated", title: "From Skills", intents: 20 },
    { type: "automated", title: "Skill Name", intents: 20 },
    { type: "automated", title: "From Skills", intents: 15 },
    { type: "automated", title: "Skill Name", intents: 33 },
    { type: "automated", title: "From Skills", intents: 20 },
    { type: "automated", title: "Skill Name", intents: 15 },
  ];

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="search">
          <input type="text" placeholder="Search card by type" className="inputSearch" value={this.state.searchInput} onChange={this.handleChange} />
        </div>
        <div className="cardGroup">
          {this.cardData
            .filter((val) => {
              if (this.state.searchInput == "") {
                return val;
              } else if (val.type.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase())) {
                return val;
              }
            })
            .map((data, index) => {
              return <Card key={index} cardData={data} />;
            })}
        </div>
      </div>
    );
  }
}

export default CradGroup;
