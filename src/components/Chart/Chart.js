import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataPointsValues = props.dataPoints.map(
    (dataPoints) => dataPoints.value
  );
  const maximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          max={maximum}
          label={point.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
