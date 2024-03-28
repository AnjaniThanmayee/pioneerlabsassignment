import { Line } from "react-chartjs-2";

export const LineGraph = ({ chartData, width, height }) => {
  // Extracting years and populations from the chartData
  const years = chartData.map((data) => data.Year);
  const populations = chartData.map((data) => data.Population);

  // Background colors for lines
  const lineColor = "#75a3a3";

  // Line graph data
  const data = {
    labels: years, // Years on the x-axis
    datasets: [
      {
        label: "Population",
        data: populations, // Population on the y-axis
        borderColor: lineColor, // Line color
        borderWidth: 2, // Line width
        fill: false,
      },
    ],
  };

  // Line graph options
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Population of USA in different years",
        color: "#fff", // Title text color
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          color: "#fff", // X-axis label color
        },
        ticks: {
          color: "#fff", // X-axis ticks color
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
          color: "#fff", // Y-axis label color
        },
        ticks: {
          color: "#fff", // Y-axis ticks color
          min: Math.min(...populations), // Set min value to the minimum population
          max: Math.max(...populations), // Set max value to the maximum population
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ width: width, height: height }}>
      <h2 style={{ textAlign: "center", marginBottom: "10px", color: "#fff" }}>
        Line Graph
      </h2>
      <div style={{ width: "100%", height: "80%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
