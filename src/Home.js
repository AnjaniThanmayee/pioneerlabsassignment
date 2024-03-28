import React, { Component } from "react";
import { BarChart } from "./BarChart";
import { CategoryScale } from "chart.js";
import CryptoPrices from "./CryptoPrices";
import Chart from "chart.js/auto";
import { LineGraph } from "./LineGraph";
import MetaMaskIntegration from "./MetaMaskIntegration";
Chart.register(CategoryScale);
class Home extends Component {
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
        </div>
        <div className="chart-container">
          <LineGraph chartData={populationData} />
        </div>
        <div className="bitcoin-container">
          <img
            alt="bitcoin"
            className="bitcoin"
            src="https://res.cloudinary.com/zenbusiness/q_auto/v1/logaster/logaster-2022-08-bitcoin-logo-2010-by-satoshi-nakamoto-min.jpg"
          />
          <h1>Bitcoin</h1>
        </div>

        <CryptoPrices />
        <div>
          <h1>Connect to MetaMask Wallet</h1>
          <MetaMaskIntegration />
        </div>
      </div>
    );
  }
}

export default Home;
