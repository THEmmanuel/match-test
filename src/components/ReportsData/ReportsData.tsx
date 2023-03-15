import React, { useState } from 'react';
import style from './ReportsData.module.css';

const ReportsData = (props: any) => {
	console.log(props.data)



	const ProjectCard = (props: any) => {
		const [showTable, setShowTable] = useState(false)
		const tableToggleHandler = () => setShowTable(!showTable)

		return (
			<>
				<div className={style.ProjectHeading} onClick={tableToggleHandler}>
					<span className={style.ProjectName}>{props.projectName}</span>
					<span className={style.ProjectAmount}>Total: {props.projectAmount}USD</span>
				</div>


				{
					showTable ?
						<table className={style.ReportsTable}>
							<thead className={style.ReportsTableHeading}>
								<th className={style.ReportsTableRowFirst}>Date</th>
								<th>Gateway</th>
								<th>Transaction ID</th>
								<th className={style.ReportsTableRowLast}>Amount</th>
							</thead>

							<tbody>
								{props.value.map((item, index) => (
									<tr className={style.ReportsTableRow}>
										<td className={style.ReportsTableRowFirst}>{item.modified}</td>
										<td>{item.gatewayId}</td>
										<td>{item.paymentId}</td>
										<td className={style.ReportsTableRowLast}>{item.amount} USD</td>
									</tr>
								))}
							</tbody>
						</table>
						: null
				}

			</>
		)
	}



	return (
		<div className={style.ReportsWrapper}>
			{Object.entries(props.data).map(([key, value]) => {
				// Calculate the total amount for this key
				const totalAmount = value.reduce((acc, item) => acc + item.amount, 0);

				return (
					<div key={key}>
						<ProjectCard
							projectName={key}
							projectAmount={totalAmount}
							value={value}
						/>
					</div>
				);
			})}
		</div>
	)
}

export default ReportsData