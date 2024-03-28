import React, { Component } from "react";
import { BarChart } from "./BarChart";
import { CategoryScale } from "chart.js";
import { LineGraph } from "./LineGraph";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);
class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populationData: [],
    };
  }

  componentDidMount() {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((data) => this.setState({ populationData: data.data }))
      .catch((error) => console.error(error));
  }

  render() {
    const { populationData } = this.state;

    if (!populationData.length) {
      return <p>Loading population data...</p>;
    }

    return (
      <div className="home">
        <div className="chart-container">
          <BarChart chartData={populationData} />
          <LineGraph chartData={populationData} />
        </div>
      </div>
    );
  }
}

export default Graphs;
