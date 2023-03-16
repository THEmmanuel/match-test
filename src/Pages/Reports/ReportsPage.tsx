// Package Imports
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import style from './ReportsPage.module.css';
import { format } from 'date-fns';
import { dataContext } from "../../contexts/dataContext";

// Component imports
import Dropdown from "../../components/Dropdown/Dropdown";
import Datepicker from "../../components/Datepicker/Datepicker";
import ReportsEmpty from "../../containers/ReportsEmpty/ReportsEmpty";
import Reports from "../../containers/Reports/Reports";

// // context imports
// import { projectContext } from "../../contexts/dataContext";
// import { gatewayContext } from "../../contexts/dataContext";

const API_URL = 'http://178.63.13.157:8090/mock-api/api'

const formatDate = (date: Date) => {
	return format(date, 'yyyy-MM-dd');
}

const ReportsPage = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { projects } = useContext(dataContext)
	const { gateways } = useContext(dataContext)
	const [reports, setReports] = useState([]);
	const [showReports, setShowReports] = useState(false)

	const [projectObject, setProjectObject] = useState(null)
	const [gatewayObject, setGatewayObject] = useState(null)

	const [selectedProject, setSelectedProject] = useState('')
	const [selectedGateway, setSelectedGateway] = useState('')
	const [toDate, setToDate] = useState('')
	const [fromDate, setFromDate] = useState('')

	const getReports = () => {
		axios.post(`${API_URL}/report`, {
			from: fromDate,
			to: toDate,
			projectId: selectedProject,
			gatewayId: selectedGateway
		}).then(
			res => setReports(res.data.data)
		).catch(err => err)
		setShowReports(true)
	}


	const handleProjectChange = (selectedValue: any) => {
		setSelectedProject(selectedValue.projectId)
		setProjectObject(selectedValue)
		setShowReports(false)
	}

	const handleGatewayChange = (selectedValue: any) => {
		setSelectedGateway(selectedValue.gatewayId)
		setGatewayObject(selectedValue)
		setShowReports(false)
	}

	const handleToDateChange = (selectedValue: any) => {
		setToDate(formatDate(selectedValue))
		setShowReports(false)
	}

	const handleFromDateChange = (selectedValue: any) => {
		setFromDate(formatDate(selectedValue))
		setShowReports(false)
	}



	useEffect(() => {

	}, [])



	return (
		<section className={style.ReportsPage}>
			<div className={style.ReportsTopWrapper}>
				<div className={style.ReportsInfo}>
					<h2 className={style.ReportsHeading}>Reports</h2>
					<span className={style.ReportsText}>Easily generate a report of your transactions</span>
				</div>

				<div className={style.ReportsFilterWrapper}>
					<Dropdown
						type='projects'
						values={projects}
						onSelect={handleProjectChange}
						placeholderText='Select project'
					/>

					<Dropdown
						type='gateway'
						values={gateways}
						onSelect={handleGatewayChange}
						placeholderText='Select gateway'
					/>

					<Datepicker
						placeholderText='To date'
						onSelect={handleToDateChange}
					/>

					<Datepicker
						placeholderText='From date'
						onSelect={handleFromDateChange}
					/>

					<button
						className={style.ReportsGenerateButton}
						onClick={getReports}
					>
						Generate Report
					</button>
				</div>
			</div>

			<div>
				{
					reports.length === 0
						?
						< ReportsEmpty />
						:
						showReports === true ?
							<Reports
								selectedProject={projectObject ? projectObject : ''}
								selectedGateway={gatewayObject ? gatewayObject : ''}
								reportsData={reports}
							/>
							: <span>Click on "Generate Report" to view updated results</span>
				}
			</div>
		</section>
	)
}

export default ReportsPage