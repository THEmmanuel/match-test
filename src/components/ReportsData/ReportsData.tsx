import React, { useState } from 'react';
import style from './ReportsData.module.css';

const ReportsData = (props: any) => {

	console.log(props.data)

	const ProjectCard = (props: any) => {
		return (
			<div className={style.ProjectHeading}>
				<span className={style.ProjectName}>{props.projectName}</span>
				<span className={style.ProjectAmount}>Total: {props.projectAmount}USD</span>
			</div>
		)
	}

	return (
		<div>
			{Object.entries(props.data).map(([key, value]) => {
				// Calculate the total amount for this key
				const totalAmount = value.reduce((acc, item) => acc + item.amount, 0);

				return (
					<div key={key}>
						<ProjectCard
							projectName={key}
							projectAmount={totalAmount}
						/>

						<table className={style.ReportsTable}>
							<thead className={style.ReportsTableHeading}>
								<th className={style.ReportsTableRowFirst}>Date</th>
								<th>Gateway</th>
								<th>Transaction ID</th>
								<th className={style.ReportsTableRowLast}>Amount</th>
							</thead>

							<tbody>
								{value.map((item, index) => (
									<tr className={style.ReportsTableRow}>
										<td className={style.ReportsTableRowFirst}>{item.modified}</td>
										<td>{item.gatewayId}</td>
										<td>{item.paymentId}</td>
										<td className={style.ReportsTableRowLast}>{item.amount} USD</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				);
			})}
		</div>

	)
}

export default ReportsData