import React, { useState } from 'react';
import style from './ReportsData.module.css';
import { formatNumber } from '../../assets/utils/formatNumber';

interface ReportsDataProps {
	data: { [key: string]: { modified: string; amount: number; paymentId: string; projectId?: string; gatewayId?: string }[] };
	type: string;
	showTotal: boolean
	selectedProject: string
	selectedGateway: string
}

interface ProjectCardProps {
	projectName: string;
	projectAmount: number;
	value: { modified: string; amount: number; paymentId: string; projectId?: string; gatewayId?: string }[];
	type: string;
}

const ReportsData = (props: ReportsDataProps) => {
	console.log(props.type);

	const ProjectCard = (props: ProjectCardProps) => {
		const [showTable, setShowTable] = useState(false);
		const tableToggleHandler = () => setShowTable(!showTable);

		return (
			<>
				<div className={style.ProjectHeading} onClick={tableToggleHandler}>
					<span className={style.ProjectName}>{props.projectName}</span>
					<span className={style.ProjectAmount}>Total: {formatNumber(props.projectAmount)}USD</span>
				</div>

				{showTable ?
					<table className={style.ReportsTable}>
						<thead className={style.ReportsTableHeading}>
							<tr>
								<th className={style.ReportsTableRowFirst}>Date</th>
								<th>{props.type}</th>
								<th>Transaction ID</th>
								<th className={style.ReportsTableRowLast}>Amount</th>
							</tr>
						</thead>
						<tbody>
							{props.value.map((item, index) => (
								<tr className={style.ReportsTableRow} key={index}>
									<td className={style.ReportsTableRowFirst}>{item.modified}</td>
									<td>{props.type === 'Gateway' ? item.projectId : item.gatewayId}</td>
									<td>{item.paymentId}</td>
									<td className={style.ReportsTableRowLast}>{item.amount} USD</td>
								</tr>
							))}
						</tbody>
					</table>
					: null
				}
			</>
		);
	};

	// Calculate total sum
	const totalSum = Object.values(props.data)
		.flat()
		.reduce((sum, item) => sum + item.amount, 0);

	return (
		<div>
			<div className={style.ReportsWrapper}>
				<h3 className={style.ReportsTitle}>
					{props.selectedProject ? props.selectedProject : 'All Projects'} | {props.selectedGateway ? props.selectedGateway : 'All Gateways'}
				</h3>
				{Object.entries(props.data).map(([key, value]) => {
					const totalAmount = value.reduce((acc, item) => acc + item.amount, 0);

					return (
						<div key={key} className={style.ReportsCardWrapper}>
							<ProjectCard
								projectName={key}
								projectAmount={totalAmount}
								value={value}
								type={props.type}
							/>
						</div>
					);
				})}
			</div>

			{props.showTotal ? (
				<span className={style.TotalSum}>
					Total: {formatNumber(totalSum)} USD
				</span>
			) : null}
		</div>
	);
};

export default ReportsData;
