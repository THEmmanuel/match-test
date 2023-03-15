import React from 'react';
import style from './DonutChart.module.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = (props: any) => {
	const data = props.data

	const arr1 = Object.keys(data);
	const arr2 = [];

	for (let key of arr1) {
		let sum = 0;
		for (let obj of data[key]) {
			sum += obj.amount;
		}
		arr2.push(sum);
	}

	console.log(arr1); // Output: ['ERdPQ', 'bgYhx']
	console.log(arr2); // Output: [3523.91, 3500]

	const chartData = {
		labels: [...arr1],
		datasets: [
			{
				label: 'Amount',
				data: [...arr2],

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
				<Doughnut data={chartData} />
			</div>
		</div>
	)
}

export default DonutChart