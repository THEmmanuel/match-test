import React from 'react';
import style from './ReportsData.module.css';

const ReportsData = (props: any) => {

	console.log(props.data)

	const ProjectCard = (props: any) => {
		return (
			<div className={style.ProjectHeading}>
				<span>{props.projectName}</span>
				<span>{props.projectAmount}</span>
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

						<table>
							<thead>
								<th>Date</th>
								<th>Gateway</th>
								<th>Transaction ID</th>
								<th>Amount</th>
							</thead>

							<tbody>
								{value.map((item, index) => (
									<tr>
										<td>{item.modified}</td>
										<td>{item.gatewayId}</td>
										<td>{item.paymentId}</td>
										<td>{item.amount}</td>
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