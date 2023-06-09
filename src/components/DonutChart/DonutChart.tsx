/* eslint-disable array-callback-return */
import React, {useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import style from './DonutChart.module.css';
import { formatNumber } from '../../utils/formatNumber';
import { getProjectName } from "../../utils/nameUtils";
import { getGatewayName } from "../../utils/nameUtils";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DonutChart = (props: any) => {
	const { projects } = useContext(dataContext)
	const { gateways } = useContext(dataContext)


	const data = props.data

	const idArray: string[] = Object.keys(data);
	const amountArray: number[] = [];
	const nameArray: string[] = idArray.map((id: string) => {
		return (
			props.type === 'Gateway' ? getGatewayName(id, gateways) : getProjectName(id, projects)
		)
	})

	for (let key of idArray) {
		let sum = 0;
		for (let obj of data[key]) {
			sum += obj.amount;
		}
		amountArray.push(sum);
	}

	// console.log(idArray); // Output: ['ERdPQ', 'bgYhx']
	// console.log(amountArray); // Output: [3523.91, 3500]

	const totalAmount = amountArray.reduce((acc, curr) => acc + curr, 0);

	const options = {
		plugins: {
			doughnutlabel: {
				labels: {
					render: 'percentage',
					fontColor: ['green', 'white', 'red'],
					precision: 2,
					text: ''
				}
			},
			datalabels: {
				display: true,
				formatter: (value: number, ctx: { chart: { data: { datasets: { data: any; }[]; }; }; }) => {
					let sum = 0;
					let dataArr = ctx.chart.data.datasets[0].data;
					dataArr.map((data: number) => {
						sum += data;
					});
					let percentage = (value * 100 / sum).toFixed(2) + "%";
					return percentage;
				},
				color: '#fff',
			}
		}
	};

	const chartData = {
		labels: [...nameArray],
		datasets: [
			{
				label: 'Amount',
				data: [...amountArray],

				backgroundColor: [
					'rgba(162, 89, 255, 1)',
					'rgba(242, 78, 30, 1)',
					'rgba(255, 193, 7, 1',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			}
		]
	}

	return (
		<div className={style.DonutChartWrapper}>
			<div className={style.DonutChartContainer}>
				<Doughnut data={chartData}
					options={options}
				/>
			</div>

			<span className={style.amountSum}>Total : {formatNumber(totalAmount)} USD</span>
		</div>
	)
}

export default DonutChart
