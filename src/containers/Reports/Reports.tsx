import React from "react";
import style from './Reports.module.css';

import ReportsData from "../../components/ReportsData/ReportsData";
import DonutChart from "../../components/DonutChart/DonutChart";

const Reports = (props: any) => {
	const reportsData = [...props.reportsData];
	console.log(reportsData);

	const groupedDataByProject = reportsData.reduce((acc, item) => {
		const projectId = item.projectId;

		if (!acc[projectId]) {
			acc[projectId] = []
		}

		acc[projectId].push(item)
		return acc
	}, {})
	console.log(groupedDataByProject, 'by project');


	const groupedDataByGateway = reportsData.reduce((acc, item) => {
		const gatewayId = item.gatewayId;

		if (!acc[gatewayId]) {
			acc[gatewayId] = []
		}

		acc[gatewayId].push(item)
		return acc
	}, {})
	console.log(groupedDataByGateway, 'by gateway')

	const filteredData = reportsData.filter(item => {
		return item.projectId === props.selectedProject.projectId && item.gatewayId === props.selectedGateway.gatewayId
	})
	console.log('filtered items', filteredData)


	// Conditional rendering for project, gateway info and charts based on user input


	if (props.selectedProject === '' && props.selectedGateway === '') {
		return (
			<div>
				{/* <span>Card</span> */}
				<ReportsData />
			</div>
		)
	} else if (props.selectedProject === '' && props.selectedGateway !== '') {
		return (
			<div>
				<ReportsData />
				<DonutChart />
			</div>
		)
	} else if (props.selectedProject !== '' && props.selectedGateway !== '') {
		return (
			<div>
				<ReportsData />
			</div>
		)
	} else if (props.selectedProject !== '' && props.selectedGateway === '') {
		return (
			<div>
				<ReportsData />
				<DonutChart />
			</div>
		)
	} else {
		return <div>No data selected</div>
	}
}

export default Reports;