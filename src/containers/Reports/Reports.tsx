import React from "react";
import style from './Reports.module.css';

import ReportsData from "../../components/ReportsData/ReportsData";
import DonutChart from "../../components/DonutChart/DonutChart";

const Reports = (props: any) => {
	const reportsData = [...props.reportsData];

	const groupedDataByProject = reportsData.reduce((acc, item) => {
		const projectId = item.projectId;

		if (!acc[projectId]) {
			acc[projectId] = []
		}

		acc[projectId].push(item)
		return acc
	}, {})


	const groupedDataByGateway = reportsData.reduce((acc, item) => {
		const gatewayId = item.gatewayId;

		if (!acc[gatewayId]) {
			acc[gatewayId] = []
		}

		acc[gatewayId].push(item)
		return acc
	}, {})

	// Conditional rendering for project, gateway info and donut chart based on user input
	if (props.selectedProject === '' && props.selectedGateway === '') {
		return (
			<div>
				<ReportsData
					data={groupedDataByProject}
					type='Project'
					showTotal={true}
					selectedProject={props.selectedProject.name}
					selectedGateway={props.selectedGateway.name}

				/>
			</div>
		)
	} else if (props.selectedProject === '' && props.selectedGateway !== '') {
		return (
			<div className={style.ReportsChartWrapper}>
				<div className={style.ReportsTableWrapper}>
					<ReportsData
						type='Project'
						data={groupedDataByProject}
						showTotal={false}
						selectedProject={props.selectedProject.name}
						selectedGateway={props.selectedGateway.name}

					/>
				</div>

				<DonutChart
					data={groupedDataByProject}
					type='Project'
				/>
			</div>
		)
	} else if (props.selectedProject !== '' && props.selectedGateway !== '') {
		return (
			<div>
				<ReportsData
					type='Gateway'
					data={groupedDataByGateway}
					showTotal={true}
					selectedProject={props.selectedProject.name}
					selectedGateway={props.selectedGateway.name}

				/>
			</div>
		)
	} else if (props.selectedProject !== '' && props.selectedGateway === '') {
		return (
			<div className={style.ReportsChartWrapper}>
				<div className={style.ReportsTableWrapper}>
					<ReportsData
						type='Gateway'
						data={groupedDataByGateway}
						showTotal={false}
						selectedProject={props.selectedProject.name}
						selectedGateway={props.selectedGateway.name}
					/>
				</div>

				<DonutChart
					data={groupedDataByGateway}
					type='Gateway'
				/>
			</div>
		)
	} else {
		return <div>No data selected</div>
	}
}

export default Reports;