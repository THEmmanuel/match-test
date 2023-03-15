import React from "react";
import style from './Reports.module.css';

const Reports = (props: any) => {
	return (
		<div className={style.ReportsContainer}>
			<div>
				<span>{props.selectedProject} | {props.selectedGateway}</span>
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