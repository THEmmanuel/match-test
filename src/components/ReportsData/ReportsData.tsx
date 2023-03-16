import React, { useState, useEffect, useContext } from "react";
import style from './ReportsData.module.css';
import { formatNumber } from '../../utils/formatNumber';
import { dataContext } from "../../contexts/dataContext";


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
	const { projects } = useContext(dataContext)
	const { gateways } = useContext(dataContext)

	const getProjectName = (projectId: any) => {
		const project = projects.find((project: any) => project.projectId === projectId);
		return project ? project.name : '';
	};

	
	const getGatewayName = (gatewayId: any) => {
		const gateway = gateways.find((gateway: any) => gateway.gatewayId === gatewayId);
		console.log(gateway)
		return gateway ? gateway.name : '';
	};
	
	console.log(getGatewayName('i6ssp'))

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
									<td>{props.type === 'Gateway' ? getProjectName(item.projectId) : getGatewayName(item.gatewayId)}</td>
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
								projectName={props.type === 'Gateway' ? getGatewayName(key) : getProjectName(key)}
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
