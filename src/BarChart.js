import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData, width, height }) => {
  // Extracting years and populations from the chartData
  const years = chartData.map((data) => data.Year);
  const populations = chartData.map((data) => data.Population);

  // Background colors for bars
  const colors = [
    "#acddde",
    "#caf1de",
    "#e1f8dc",
    "#fceea7",
    "#ffe7c7",
    "#f7d8ba",
    "#fff2cc",
    "#ead1dc",
    "#e6b8af",
  ];

  // Bar chart data
  const data = {
    labels: years, // Years on the x-axis
    datasets: [
      {
        label: "Population",
        data: populations, // Population on the y-axis
        backgroundColor: colors, // Background colors for bars
      },
    ],
  };

  // Bar chart options
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
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ width: width, height: height }}>
      <h2 style={{ textAlign: "center", marginBottom: "10px", color: "#fff" }}>
        Bar Graph
      </h2>
      <div style={{ width: "100%", height: "80%" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
