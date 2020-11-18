 /*import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { Chart, ChartCanvas } from "react-stockcharts";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  MouseCoordinateX,
  MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";
import { fitWidth } from "react-stockcharts/lib/helper";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { CandlestickSeries, LineSeries  } from "react-stockcharts/lib/series";
import {
  OHLCTooltip,
} from "react-stockcharts/lib/tooltip";
import { last  } from "react-stockcharts/lib/utils";

const margin = { left: 0, right: 70, top: 20, bottom: 30 };

const fitChart = ({ ratio, width, data: initialData, type = "svg", gridProps, seriesType ="CandlestickSeries" }: any) => {
  const height = 400;
  const gridHeight = height - margin.top - margin.bottom;
  const gridWidth = width - margin.left - margin.right;
  const showGrid = true;
  const yGrid = showGrid ? { innerTickSize: -1 * gridWidth } : {};
  const xGrid = showGrid ? { innerTickSize: -1 * gridHeight } : {};
	const xScaleProvider = discontinuousTimeScaleProvider
			.inputDateAccessor(d => d.date);
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(initialData);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const Series = seriesType === "line"
      ? LineSeries
      : CandlestickSeries;


  return (
    < div >
       
      <h1>gvgvgbu</h1>
  </div >)
   <div>
    * 
      <ChartCanvas
        ratio={ratio}
        height={400}
        width={width}
        padding={{right:0, left:0, top: 0, bottom:0}}
        seriesName="MSFT"
        data={data}
        type="svg"
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={[start, end]}
      >
      <Chart id={1} yExtents={(d: { high: any; low: any; }) => [d.high, d.low]}>
          <XAxis
            tickStroke="#8BA1BE"
            axisAt="bottom" 
            orient="bottom"
            stroke="none"
            ticks={10}
            tickStrokeOpacity={0.05}
            {...xGrid}
          /> 

          <YAxis
            stroke="none"
            tickStroke="white"
            tickStrokeOpacity={0.05}
            axisAt="right"
            orient="right"
            ticks={5}
            {...yGrid}
          />
          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeFormat("%Y-%m-%d")}
            fill="#1c2023"
          />
          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
     /*       fill="#1c2023"
          />
          <Series
            wickStroke={d => d.close > d.open ? "#0CA564" : "#E6007A"}
            fill={d => d.close > d.open ? "#0CA564" : "#E6007A"}
            stroke="none"
            />
          <OHLCTooltip
            origin={[-40, 0]}
            textFill="#0CA564"
            labelFill="white"
            fontSize={13}/> 
        </Chart> 
        <CrossHairCursor /> 
      </ChartCanvas>
    </div>
  
}
const CustomChart = fitWidth(fitChart)


)*/

import React from 'react';

const CustomChart = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (chartRef.current) {
    }
  }, [])

  function prepareChart(chart) {

    var candleSeries = chart.addCandlestickSeries({
      upColor: '#0CA564',
      downColor: '#FF0087',
      borderDownColor: '#FF0087',
      borderUpColor: '#0CA564',
      wickDownColor: '#FF0087',
      wickUpColor: '#0CA564',
    });
    var volumeSeries = chart.addHistogramSeries({
      color: '#26a69a',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });


    var data = [
      { time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
	{ time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
	{ time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
	{ time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
	{ time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07 },
	{ time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
	{ time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20 },
	{ time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
	{ time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
	{ time: '2018-11-01', open: 176.84, high: 180.86, low: 175.90, close: 180.46 },
	{ time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
	{ time: '2018-11-05', open: 181.02, high: 182.41, low: 179.30, close: 182.19 },
	{ time: '2018-11-06', open: 181.93, high: 182.65, low: 180.05, close: 182.01 },
	{ time: '2018-11-07', open: 183.79, high: 187.68, low: 182.06, close: 187.23 },
	{ time: '2018-11-08', open: 187.13, high: 188.69, low: 185.72, close: 188.00 },
	{ time: '2018-11-09', open: 188.32, high: 188.48, low: 184.96, close: 185.99 },
	{ time: '2018-11-12', open: 185.23, high: 186.95, low: 179.02, close: 179.43 },
	{ time: '2018-11-13', open: 177.30, high: 181.62, low: 172.85, close: 179.00 },
	{ time: '2018-11-14', open: 182.61, high: 182.90, low: 179.15, close: 179.90 },
	{ time: '2018-11-15', open: 179.01, high: 179.67, low: 173.61, close: 177.36 },
	{ time: '2018-11-16', open: 173.99, high: 177.60, low: 173.51, close: 177.02 },
	{ time: '2018-11-19', open: 176.71, high: 178.88, low: 172.30, close: 173.59 },
	{ time: '2018-11-20', open: 169.25, high: 172.00, low: 167.00, close: 169.05 },
	{ time: '2018-11-21', open: 170.00, high: 170.93, low: 169.15, close: 169.30 },
	{ time: '2018-11-23', open: 169.39, high: 170.33, low: 168.47, close: 168.85 },
	{ time: '2018-11-26', open: 170.20, high: 172.39, low: 168.87, close: 169.82 },
	{ time: '2018-11-27', open: 169.11, high: 173.38, low: 168.82, close: 173.22 },
	{ time: '2018-11-28', open: 172.91, high: 177.65, low: 170.62, close: 177.43 },
	{ time: '2018-11-29', open: 176.80, high: 177.27, low: 174.92, close: 175.66 },
	{ time: '2018-11-30', open: 175.75, high: 180.37, low: 175.11, close: 180.32 },
	{ time: '2018-12-03', open: 183.29, high: 183.50, low: 179.35, close: 181.74 },
	{ time: '2018-12-04', open: 181.06, high: 182.23, low: 174.55, close: 175.30 },
	{ time: '2018-12-06', open: 173.50, high: 176.04, low: 170.46, close: 175.96 },
	{ time: '2018-12-07', open: 175.35, high: 178.36, low: 172.24, close: 172.79 },
	{ time: '2018-12-10', open: 173.39, high: 173.99, low: 167.73, close: 171.69 },
	{ time: '2018-12-11', open: 174.30, high: 175.60, low: 171.24, close: 172.21 },
	{ time: '2018-12-12', open: 173.75, high: 176.87, low: 172.81, close: 174.21 },
	{ time: '2018-12-13', open: 174.31, high: 174.91, low: 172.07, close: 173.87 },
	{ time: '2018-12-14', open: 172.98, high: 175.14, low: 171.95, close: 172.29 },
	{ time: '2018-12-17', open: 171.51, high: 171.99, low: 166.93, close: 167.97 },
	{ time: '2018-12-18', open: 168.90, high: 171.95, low: 168.50, close: 170.04 },
	{ time: '2018-12-19', open: 170.92, high: 174.95, low: 166.77, close: 167.56 },
	{ time: '2018-12-20', open: 166.28, high: 167.31, low: 162.23, close: 164.16 },
	{ time: '2018-12-21', open: 162.81, high: 167.96, low: 160.17, close: 160.48 },
	{ time: '2018-12-24', open: 160.16, high: 161.40, low: 158.09, close: 158.14 },
	{ time: '2018-12-26', open: 159.46, high: 168.28, low: 159.44, close: 168.28 },
	{ time: '2018-12-27', open: 166.44, high: 170.46, low: 163.36, close: 170.32 },
	{ time: '2018-12-28', open: 171.22, high: 173.12, low: 168.60, close: 170.22 },
	{ time: '2018-12-31', open: 171.47, high: 173.24, low: 170.65, close: 171.82 },
	{ time: '2019-01-02', open: 169.71, high: 173.18, low: 169.05, close: 172.41 },
	{ time: '2019-01-03', open: 171.84, high: 171.84, low: 168.21, close: 168.61 },
	{ time: '2019-01-04', open: 170.18, high: 174.74, low: 169.52, close: 173.62 },
	{ time: '2019-01-07', open: 173.83, high: 178.18, low: 173.83, close: 177.04 },
	{ time: '2019-01-08', open: 178.57, high: 179.59, low: 175.61, close: 177.89 },
	{ time: '2019-01-09', open: 177.87, high: 181.27, low: 177.10, close: 179.73 },
	{ time: '2019-01-10', open: 178.03, high: 179.24, low: 176.34, close: 179.06 },
	{ time: '2019-01-11', open: 177.93, high: 180.26, low: 177.12, close: 179.41 },
	{ time: '2019-01-14', open: 177.59, high: 179.23, low: 176.90, close: 178.81 },
	{ time: '2019-01-15', open: 176.08, high: 177.82, low: 175.20, close: 176.47 },
	{ time: '2019-01-16', open: 177.09, high: 177.93, low: 175.86, close: 177.04 },
	{ time: '2019-01-17', open: 174.01, high: 175.46, low: 172.00, close: 174.87 },
	{ time: '2019-01-18', open: 176.98, high: 180.04, low: 176.18, close: 179.58 },
	{ time: '2019-01-22', open: 177.49, high: 178.60, low: 175.36, close: 177.11 },
	{ time: '2019-01-23', open: 176.59, high: 178.06, low: 174.53, close: 176.89 },
	{ time: '2019-01-24', open: 177.00, high: 177.53, low: 175.30, close: 177.29 },
	{ time: '2019-01-25', open: 179.78, high: 180.87, low: 178.61, close: 180.40 },
	{ time: '2019-01-28', open: 178.97, high: 179.99, low: 177.41, close: 179.83 },
	{ time: '2019-01-29', open: 178.96, high: 180.15, low: 178.09, close: 179.69 },
	{ time: '2019-01-30', open: 180.47, high: 184.20, low: 179.78, close: 182.18 },
	{ time: '2019-01-31', open: 181.50, high: 184.67, low: 181.06, close: 183.53 },
	{ time: '2019-02-01', open: 184.03, high: 185.15, low: 182.83, close: 184.37 },
	{ time: '2019-02-04', open: 184.30, high: 186.43, low: 183.84, close: 186.43 },
	{ time: '2019-02-05', open: 186.89, high: 186.99, low: 184.69, close: 186.39 },
	{ time: '2019-02-06', open: 186.69, high: 186.69, low: 184.06, close: 184.72 },
	{ time: '2019-02-07', open: 183.74, high: 184.92, low: 182.45, close: 184.07 },
	{ time: '2019-02-08', open: 183.05, high: 184.58, low: 182.72, close: 184.54 },
	{ time: '2019-02-11', open: 185.00, high: 185.42, low: 182.75, close: 182.92 },
	{ time: '2019-02-12', open: 183.84, high: 186.40, low: 183.52, close: 185.52 },
	{ time: '2019-02-13', open: 186.30, high: 188.68, low: 185.92, close: 188.41 },
	{ time: '2019-02-14', open: 187.50, high: 188.93, low: 186.00, close: 187.71 },
	{ time: '2019-02-15', open: 189.87, high: 192.62, low: 189.05, close: 192.39 },
	{ time: '2019-02-19', open: 191.71, high: 193.19, low: 191.28, close: 192.33 },
	{ time: '2019-02-20', open: 192.39, high: 192.40, low: 191.11, close: 191.85 },
	{ time: '2019-02-21', open: 191.85, high: 192.37, low: 190.61, close: 191.82 },
	{ time: '2019-02-22', open: 191.69, high: 192.54, low: 191.62, close: 192.39 },
	{ time: '2019-02-25', open: 192.75, high: 193.42, low: 189.96, close: 189.98 },
	{ time: '2019-02-26', open: 185.59, high: 188.47, low: 182.80, close: 188.30 },
	{ time: '2019-02-27', open: 187.90, high: 188.50, low: 183.21, close: 183.67 },
	{ time: '2019-02-28', open: 183.60, high: 185.19, low: 183.11, close: 185.14 },
	{ time: '2019-03-01', open: 185.82, high: 186.56, low: 182.86, close: 185.17 },
	{ time: '2019-03-04', open: 186.20, high: 186.24, low: 182.10, close: 183.81 },
	{ time: '2019-03-05', open: 184.24, high: 185.12, low: 183.25, close: 184.00 },
	{ time: '2019-03-06', open: 184.53, high: 184.97, low: 183.84, close: 184.45 },
	{ time: '2019-03-07', open: 184.39, high: 184.62, low: 181.58, close: 182.51 },
	{ time: '2019-03-08', open: 181.49, high: 181.91, low: 179.52, close: 181.23 },
	{ time: '2019-03-11', open: 182.00, high: 183.20, low: 181.20, close: 182.44 },
	{ time: '2019-03-12', open: 183.43, high: 184.27, low: 182.33, close: 184.00 },
	{ time: '2019-03-13', open: 183.24, high: 183.78, low: 181.08, close: 181.14 },
	{ time: '2019-03-14', open: 181.28, high: 181.74, low: 180.50, close: 181.61 },
	{ time: '2019-03-15', open: 182.30, high: 182.49, low: 179.57, close: 182.23 },
	{ time: '2019-03-18', open: 182.53, high: 183.48, low: 182.33, close: 183.42 },
	{ time: '2019-03-19', open: 184.19, high: 185.82, low: 183.48, close: 184.13 },
	{ time: '2019-03-20', open: 184.30, high: 187.12, low: 183.43, close: 186.10 },
	{ time: '2019-03-21', open: 185.50, high: 190.00, low: 185.50, close: 189.97 },
	{ time: '2019-03-22', open: 189.31, high: 192.05, low: 188.67, close: 188.75 },
	{ time: '2019-03-25', open: 188.75, high: 191.71, low: 188.51, close: 189.68 },
	{ time: '2019-03-26', open: 190.69, high: 192.19, low: 188.74, close: 189.34 },
	{ time: '2019-03-27', open: 189.65, high: 191.61, low: 188.39, close: 189.25 },
	{ time: '2019-03-28', open: 189.91, high: 191.40, low: 189.16, close: 190.06 },
	{ time: '2019-03-29', open: 190.85, high: 192.04, low: 190.14, close: 191.89 },
	{ time: '2019-04-01', open: 192.99, high: 195.90, low: 192.85, close: 195.64 },
	{ time: '2019-04-02', open: 195.50, high: 195.50, low: 194.01, close: 194.31 },
	{ time: '2019-04-03', open: 194.98, high: 198.78, low: 194.11, close: 198.61 },
	{ time: '2019-04-04', open: 199.00, high: 200.49, low: 198.02, close: 200.45 },
	{ time: '2019-04-05', open: 200.86, high: 203.13, low: 200.61, close: 202.06 },
	{ time: '2019-04-08', open: 201.37, high: 203.79, low: 201.24, close: 203.55 },
	{ time: '2019-04-09', open: 202.26, high: 202.71, low: 200.46, close: 200.90 },
	{ time: '2019-04-10', open: 201.26, high: 201.60, low: 198.02, close: 199.43 },
	{ time: '2019-04-11', open: 199.90, high: 201.50, low: 199.03, close: 201.48 },
	{ time: '2019-04-12', open: 202.13, high: 204.26, low: 202.13, close: 203.85 },
	{ time: '2019-04-15', open: 204.16, high: 205.14, low: 203.40, close: 204.86 },
	{ time: '2019-04-16', open: 205.25, high: 205.99, low: 204.29, close: 204.47 },
	{ time: '2019-04-17', open: 205.34, high: 206.84, low: 205.32, close: 206.55 },
	{ time: '2019-04-18', open: 206.02, high: 207.78, low: 205.10, close: 205.66 },
	{ time: '2019-04-22', open: 204.11, high: 206.25, low: 204.00, close: 204.78 },
	{ time: '2019-04-23', open: 205.14, high: 207.33, low: 203.43, close: 206.05 },
	{ time: '2019-04-24', open: 206.16, high: 208.29, low: 205.54, close: 206.72 },
	{ time: '2019-04-25', open: 206.01, high: 207.72, low: 205.06, close: 206.50 },
	{ time: '2019-04-26', open: 205.88, high: 206.14, low: 203.34, close: 203.61 },
	{ time: '2019-04-29', open: 203.31, high: 203.80, low: 200.34, close: 202.16 },
	{ time: '2019-04-30', open: 201.55, high: 203.75, low: 200.79, close: 203.70 },
	{ time: '2019-05-01', open: 203.20, high: 203.52, low: 198.66, close: 198.80 },
	{ time: '2019-05-02', open: 199.30, high: 201.06, low: 198.80, close: 201.01 },
	{ time: '2019-05-03', open: 202.00, high: 202.31, low: 200.32, close: 200.56 },
	{ time: '2019-05-06', open: 198.74, high: 199.93, low: 198.31, close: 199.63 },
	{ time: '2019-05-07', open: 196.75, high: 197.65, low: 192.96, close: 194.77 },
	{ time: '2019-05-08', open: 194.49, high: 196.61, low: 193.68, close: 195.17 },
	{ time: '2019-05-09', open: 193.31, high: 195.08, low: 191.59, close: 194.58 },
	{ time: '2019-05-10', open: 193.21, high: 195.49, low: 190.01, close: 194.58 },
	{ time: '2019-05-13', open: 191.00, high: 191.66, low: 189.14, close: 190.34 },
	{ time: '2019-05-14', open: 190.50, high: 192.76, low: 190.01, close: 191.62 },
	{ time: '2019-05-15', open: 190.81, high: 192.81, low: 190.27, close: 191.76 },
	{ time: '2019-05-16', open: 192.47, high: 194.96, low: 192.20, close: 192.38 },
	{ time: '2019-05-17', open: 190.86, high: 194.50, low: 190.75, close: 192.58 },
	{ time: '2019-05-20', open: 191.13, high: 192.86, low: 190.61, close: 190.95 },
	{ time: '2019-05-21', open: 187.13, high: 192.52, low: 186.34, close: 191.45 },
	{ time: '2019-05-22', open: 190.49, high: 192.22, low: 188.05, close: 188.91 },
	{ time: '2019-05-23', open: 188.45, high: 192.54, low: 186.27, close: 192.00 },
	{ time: '2019-05-24', open: 192.54, high: 193.86, low: 190.41, close: 193.59 },
    ];
    candleSeries.setData(data);
    volumeSeries.setData([
        { time: '2018-10-19', value: 19103293.00, color: '#0CA564' },
        { time: '2018-10-22', value: 21737523.00, color: '#0CA564' },
        { time: '2018-10-23', value: 29328713.00, color: '#0CA564' },
        { time: '2018-10-24', value: 37435638.00, color: '#0CA564' },
        { time: '2018-10-25', value: 25269995.00, color: '#FF0087' },
        { time: '2018-10-26', value: 24973311.00, color: '#FF0087' },
        { time: '2018-10-29', value: 22103692.00, color: '#0CA564' },
        { time: '2018-10-30', value: 25231199.00, color: '#0CA564' },
        { time: '2018-10-31', value: 24214427.00, color: '#FF0087' },
        { time: '2018-11-01', value: 22533201.00, color: '#FF0087' },
        { time: '2018-11-02', value: 14734412.00, color: '#0CA564' },
        { time: '2018-11-05', value: 12733842.00, color: '#0CA564' },
        { time: '2018-11-06', value: 12371207.00, color: '#0CA564' },
        { time: '2018-11-07', value: 14891287.00, color: '#0CA564' },
        { time: '2018-11-08', value: 12482392.00, color: '#0CA564' },
        { time: '2018-11-09', value: 17365762.00, color: '#0CA564' },
        { time: '2018-11-12', value: 13236769.00, color: '#0CA564' },
        { time: '2018-11-13', value: 13047907.00, color: '#FF0087' },
        { time: '2018-11-14', value: 18288710.00, color: '#0CA564' },
        { time: '2018-11-15', value: 17147123.00, color: '#0CA564' },
        { time: '2018-11-16', value: 19470986.00, color: '#0CA564' },
        { time: '2018-11-19', value: 18405731.00, color: '#0CA564' },
        { time: '2018-11-20', value: 22028957.00, color: '#FF0087' },
        { time: '2018-11-21', value: 18482233.00, color: '#FF0087' },
        { time: '2018-11-23', value: 7009050.00, color: '#FF0087' },
        { time: '2018-11-26', value: 12308876.00, color: '#0CA564' },
        { time: '2018-11-27', value: 14118867.00, color: '#0CA564' },
        { time: '2018-11-28', value: 18662989.00, color: '#FF0087' },
        { time: '2018-11-29', value: 14763658.00, color: '#FF0087' },
        { time: '2018-11-30', value: 31142818.00, color: '#0CA564' },
        { time: '2018-12-03', value: 27795428.00, color: '#FF0087' },
        { time: '2018-12-04', value: 21727411.00, color: '#FF0087' },
        { time: '2018-12-06', value: 26880429.00, color: '#FF0087' },
        { time: '2018-12-07', value: 16948126.00, color: '#FF0087' },
        { time: '2018-12-10', value: 16603356.00, color: '#0CA564' },
        { time: '2018-12-11', value: 14991438.00, color: '#0CA564' },
        { time: '2018-12-12', value: 18892182.00, color: '#FF0087' },
        { time: '2018-12-13', value: 15454706.00, color: '#FF0087' },
        { time: '2018-12-14', value: 13960870.00, color: '#FF0087' },
        { time: '2018-12-17', value: 18902523.00, color: '#FF0087' },
        { time: '2018-12-18', value: 18895777.00, color: '#FF0087' },
        { time: '2018-12-19', value: 20968473.00, color: '#0CA564' },
        { time: '2018-12-20', value: 26897008.00, color: '#FF0087' },
        { time: '2018-12-21', value: 55413082.00, color: '#FF0087' },
        { time: '2018-12-24', value: 15077207.00, color: '#FF0087' },
        { time: '2018-12-26', value: 17970539.00, color: '#0CA564' },
        { time: '2018-12-27', value: 17530977.00, color: '#0CA564' },
        { time: '2018-12-28', value: 14771641.00, color: '#0CA564' },
        { time: '2018-12-31', value: 15331758.00, color: '#0CA564' },
        { time: '2019-01-02', value: 13969691.00, color: '#FF0087' },
        { time: '2019-01-03', value: 19245411.00, color: '#0CA564' },
        { time: '2019-01-04', value: 17035848.00, color: '#0CA564' },
        { time: '2019-01-07', value: 16348982.00, color: '#0CA564' },
        { time: '2019-01-08', value: 21425008.00, color: '#0CA564' },
        { time: '2019-01-09', value: 18136000.00, color: '#FF0087' },
        { time: '2019-01-10', value: 14259910.00, color: '#0CA564' },
        { time: '2019-01-11', value: 15801548.00, color: '#0CA564' },
        { time: '2019-01-14', value: 11342293.00, color: '#0CA564' },
        { time: '2019-01-15', value: 10074386.00, color: '#0CA564' },
        { time: '2019-01-16', value: 13411691.00, color: '#FF0087' },
        { time: '2019-01-17', value: 15223854.00, color: '#FF0087' },
        { time: '2019-01-18', value: 16802516.00, color: '#0CA564' },
        { time: '2019-01-22', value: 18284771.00, color: '#FF0087' },
        { time: '2019-01-23', value: 15109007.00, color: '#0CA564' },
        { time: '2019-01-24', value: 12494109.00, color: '#FF0087' },
        { time: '2019-01-25', value: 17806822.00, color: '#FF0087' },
        { time: '2019-01-28', value: 25955718.00, color: '#FF0087' },
        { time: '2019-01-29', value: 33789235.00, color: '#FF0087' },
        { time: '2019-01-30', value: 27260036.00, color: '#0CA564' },
        { time: '2019-01-31', value: 28585447.00, color: '#0CA564' },
        { time: '2019-02-01', value: 13778392.00, color: '#FF0087' },
        { time: '2019-02-04', value: 15818901.00, color: '#FF0087' },
        { time: '2019-02-05', value: 14124794.00, color: '#0CA564' },
        { time: '2019-02-06', value: 11391442.00, color: '#FF0087' },
        { time: '2019-02-07', value: 12436168.00, color: '#FF0087' },
        { time: '2019-02-08', value: 12011657.00, color: '#0CA564' },
        { time: '2019-02-11', value: 9802798.00, color: '#0CA564' },
        { time: '2019-02-12', value: 11227550.00, color: '#0CA564' },
        { time: '2019-02-13', value: 11884803.00, color: '#0CA564' },
        { time: '2019-02-14', value: 11190094.00, color: '#FF0087' },
        { time: '2019-02-15', value: 15719416.00, color: '#0CA564' },
        { time: '2019-02-19', value: 12272877.00, color: '#0CA564' },
        { time: '2019-02-20', value: 11379006.00, color: '#0CA564' },
        { time: '2019-02-21', value: 14680547.00, color: '#0CA564' },
        { time: '2019-02-22', value: 12534431.00, color: '#0CA564' },
        { time: '2019-02-25', value: 15051182.00, color: '#FF0087' },
        { time: '2019-02-26', value: 12005571.00, color: '#FF0087' },
        { time: '2019-02-27', value: 8962776.00, color: '#0CA564' },
        { time: '2019-02-28', value: 15742971.00, color: '#0CA564' },
        { time: '2019-03-01', value: 10942737.00, color: '#0CA564' },
        { time: '2019-03-04', value: 13674737.00, color: '#FF0087' },
        { time: '2019-03-05', value: 15749545.00, color: '#FF0087' },
        { time: '2019-03-06', value: 13935530.00, color: '#FF0087' },
        { time: '2019-03-07', value: 12644171.00, color: '#0CA564' },
        { time: '2019-03-08', value: 10646710.00, color: '#0CA564' },
        { time: '2019-03-11', value: 13627431.00, color: '#0CA564' },
        { time: '2019-03-12', value: 12812980.00, color: '#FF0087' },
        { time: '2019-03-13', value: 14168350.00, color: '#0CA564' },
        { time: '2019-03-14', value: 12148349.00, color: '#0CA564' },
        { time: '2019-03-15', value: 23715337.00, color: '#0CA564' },
        { time: '2019-03-18', value: 12168133.00, color: '#FF0087' },
        { time: '2019-03-19', value: 13462686.00, color: '#FF0087' },
        { time: '2019-03-20', value: 11903104.00, color: '#0CA564' },
        { time: '2019-03-21', value: 10920129.00, color: '#0CA564' },
        { time: '2019-03-22', value: 25125385.00, color: '#0CA564' },
        { time: '2019-03-25', value: 15463411.00, color: '#0CA564' },
        { time: '2019-03-26', value: 12316901.00, color: '#0CA564' },
        { time: '2019-03-27', value: 13290298.00, color: '#0CA564' },
        { time: '2019-03-28', value: 20547060.00, color: '#FF0087' },
        { time: '2019-03-29', value: 17283871.00, color: '#0CA564' },
        { time: '2019-04-01', value: 16331140.00, color: '#FF0087' },
        { time: '2019-04-02', value: 11408146.00, color: '#FF0087' },
        { time: '2019-04-03', value: 15491724.00, color: '#0CA564' },
        { time: '2019-04-04', value: 8776028.00, color: '#0CA564' },
        { time: '2019-04-05', value: 11497780.00, color: '#0CA564' },
        { time: '2019-04-08', value: 11680538.00, color: '#0CA564' },
        { time: '2019-04-09', value: 10414416.00, color: '#FF0087' },
        { time: '2019-04-10', value: 8782061.00, color: '#0CA564' },
        { time: '2019-04-11', value: 9219930.00, color: '#FF0087' },
        { time: '2019-04-12', value: 10847504.00, color: '#0CA564' },
        { time: '2019-04-15', value: 7741472.00, color: '#FF0087' },
        { time: '2019-04-16', value: 10239261.00, color: '#0CA564' },
        { time: '2019-04-17', value: 15498037.00, color: '#FF0087' },
        { time: '2019-04-18', value: 13189013.00, color: '#0CA564' },
        { time: '2019-04-22', value: 11950365.00, color: '#0CA564' },
        { time: '2019-04-23', value: 23488682.00, color: '#FF0087' },
        { time: '2019-04-24', value: 13227084.00, color: '#FF0087' },
        { time: '2019-04-25', value: 17425466.00, color: '#FF0087' },
        { time: '2019-04-26', value: 16329727.00, color: '#0CA564' },
        { time: '2019-04-29', value: 13984965.00, color: '#0CA564' },
        { time: '2019-04-30', value: 15469002.00, color: '#0CA564' },
        { time: '2019-05-01', value: 11627436.00, color: '#FF0087' },
        { time: '2019-05-02', value: 14435436.00, color: '#0CA564' },
        { time: '2019-05-03', value: 9388228.00, color: '#0CA564' },
        { time: '2019-05-06', value: 10066145.00, color: '#FF0087' },
        { time: '2019-05-07', value: 12963827.00, color: '#FF0087' },
        { time: '2019-05-08', value: 12086743.00, color: '#FF0087' },
        { time: '2019-05-09', value: 14835326.00, color: '#0CA564' },
        { time: '2019-05-10', value: 10707335.00, color: '#0CA564' },
        { time: '2019-05-13', value: 13759350.00, color: '#FF0087' },
        { time: '2019-05-14', value: 12776175.00, color: '#FF0087' },
        { time: '2019-05-15', value: 10806379.00, color: '#0CA564' },
        { time: '2019-05-16', value: 11695064.00, color: '#0CA564' },
        { time: '2019-05-17', value: 14436662.00, color: '#0CA564' },
        { time: '2019-05-20', value: 20910590.00, color: '#0CA564' },
        { time: '2019-05-21', value: 14016315.00, color: '#0CA564' },
        { time: '2019-05-22', value: 11487448.00, color: '#FF0087' },
        { time: '2019-05-23', value: 11707083.00, color: '#FF0087' },
        { time: '2019-05-24', value: 8755506.00, color: '#0CA564' },
        { time: '2019-05-28', value: 3097125.00, color: '#0CA564' },
    ]);

    

   var lastClose = data[data.length - 1].close;
    var lastIndex = data.length - 1;

    var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
    var targetPrice = getRandomPrice();

    var currentIndex = lastIndex + 1;
    var currentBusinessDay = { day: 29, month: 5, year: 2019 };
    var ticksInCurrentBar = 0;
    var currentBar = {
      open: null,
      high: null,
      low: null,
      close: null,
      time: currentBusinessDay
    };

    function mergeTickToBar(price) {
      if (currentBar.open === null) {
        currentBar.open = price;
        currentBar.high = price;
        currentBar.low = price;
        currentBar.close = price;
      } else {
        currentBar.close = price;
        currentBar.high = Math.max(currentBar.high, price);
        currentBar.low = Math.min(currentBar.low, price);
      }
      candleSeries.update(currentBar);
    }

    function reset() {
      candleSeries.setData(data);
      lastClose = data[data.length - 1].close;
      lastIndex = data.length - 1;

      targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
      targetPrice = getRandomPrice();

      currentIndex = lastIndex + 1;
      currentBusinessDay = { day: 29, month: 5, year: 2019 };
      ticksInCurrentBar = 0;
    }

    function getRandomPrice() {
      return 10 + Math.round(Math.random() * 10000) / 100;
    }

    function nextBusinessDay(time) {
      var d = new Date();
      d.setUTCFullYear(time.year);
      d.setUTCMonth(time.month - 1);
      d.setUTCDate(time.day + 1);
      d.setUTCHours(0, 0, 0, 0);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate()
      };
    }

    setInterval(function () {
      var deltaY = targetPrice - lastClose;
      var deltaX = targetIndex - lastIndex;
      var angle = deltaY / deltaX;
      var basePrice = lastClose + (currentIndex - lastIndex) * angle;
      var noise = 0.1 - Math.random() * 0.2 + 1.0;
      var noisedPrice = basePrice * noise;
      mergeTickToBar(noisedPrice);
      if (++ticksInCurrentBar === 5) {
        // move to next bar
        currentIndex++;
        currentBusinessDay = nextBusinessDay(currentBusinessDay);
        currentBar = {
          open: null,
          high: null,
          low: null,
          close: null,
          time: currentBusinessDay
        };
        ticksInCurrentBar = 0;
        if (currentIndex === 5000) {
          reset();
          return;
        }
        if (currentIndex === targetIndex) {
          // change trend
          lastClose = noisedPrice;
          lastIndex = currentIndex;
          targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
          targetPrice = getRandomPrice();
        }
      }
    }, 200);

  }
  return <div ref={chartRef} />;
}


export default CustomChart;
