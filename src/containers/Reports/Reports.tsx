import React from "react";
import style from './Reports.module.css';

const Reports = (props: any) => {
	const reportsData = [...props.reportsData];
	console.log(reportsData);

	const groupedDataByProject = reportsData.reduce((acc, item) => {
		const projectId = item.projectId;

		if(!acc[projectId]){
			acc[projectId] = []
		}

		acc[projectId].push(item)
		return acc
	}, {})
	console.log(groupedDataByProject, 'by project')

	const groupedDataByGateway = reportsData.reduce((acc, item) => {
		const gatewayId = item.gatewayId;

		if(!acc[gatewayId]){
			acc[gatewayId] = []
		}

		acc[gatewayId].push(item)
		return acc
	}, {})
	console.log(groupedDataByGateway, 'by gateway')




	const groupDataByGateway = () => {

	}


	return (
		<div className={style.ReportsContainer}>
			<div>
				<span>{props.selectedProject.name} | {props.selectedGateway.name}</span>
				<div>
					<span>project 1</span>
					<span>total: total here</span>
				</div>

				<div>
					<table>
						<thead>
							<th>Date</th>
							<th>Gateway</th>
							<th>Transaction ID</th>
							<th>Amount</th>
						</thead>

						<tbody>
							<tr>
								<td>date</td>
								<td>gateway num</td>
								<td>id</td>
								<td>amt</td>
							</tr>
						</tbody>


					</table>
				</div>
			</div>

			<div>
				<span>Charts</span>
			</div>
		</div>
	)
}

export default Reports;