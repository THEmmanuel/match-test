// Package Imports
import React, { useState, useEffect } from "react";
import axios from 'axios';
import style from './ReportsPage.module.css';
import { format } from 'date-fns';

// Component imports
import Dropdown from "../../components/Dropdown/Dropdown";
import Datepicker from "../../components/Datepicker/Datepicker";
import ReportsEmpty from "../../containers/ReportsEmpty/ReportsEmpty";
import Reports from "../../containers/Reports/Reports";

const API_URL = 'http://178.63.13.157:8090/mock-api/api'

const formatDate = (date: Date) => {
	return format(date, 'yyyy-MM-dd');
}

const ReportsPage = () => {
	const [projects, setProjects] = useState({});
	const [gateways, setGateways] = useState({})

	const [selectedProject, setSelectedProject] = useState('')
	const [selectedGateway, setSelectedGateway] = useState('')
	const [toDate, setToDate] = useState('')
	const [fromDate, setFromDate] = useState('')

	const getProjects = () => {
		axios.get(`${API_URL}/projects`)
			.then(res => setProjects(res.data.data))
	}

	const getReports = () => {
		axios.post(`${API_URL}/report`, {
			from: fromDate,
			to: toDate
		}).then(
			res => console.log(res)
		).catch(err => err)
		console.log('get reports')
	}


	const getGateways = () => {
		axios.get(`${API_URL}/gateways`)
			.then(res => setGateways(res.data.data))
	}

	const handleProjectChange = (selectedValue: any) => {
		setSelectedProject(selectedValue.projectId)
	}

	const handleGatewayChange = (selectedValue: any) => {
		setSelectedGateway(selectedValue.gatewayId)
	}

	const handleToDateChange = (selectedValue: any) => {
		setToDate(formatDate(selectedValue))
	}

	const handleFromDateChange = (selectedValue: any) => {
		setFromDate(formatDate(selectedValue))
	}



	useEffect(() => {
		getProjects()
		getGateways()
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
					onClick = {getReports}
					>
						Generate Report
					</button>
				</div>
			</div>

			<div>
				{/* <ReportsEmpty /> */}
				<Reports />
			</div>
		</section>
	)
}

export default ReportsPage