// Package Imports
import React, { useState, useEffect } from "react";
import axios from 'axios';
import style from './ReportsPage.module.css';

// Component imports
import Dropdown from "../../components/Dropdown/Dropdown";
import Datepicker from "../../components/Datepicker/Datepicker";
import ReportsEmpty from "../../containers/ReportsEmpty/ReportsEmpty";
import Reports from "../../containers/Reports/Reports";

const API_URL = 'http://178.63.13.157:8090/mock-api/api'

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

	const getGateways = () => {
		axios.get(`${API_URL}/gateways`)
			.then(res => setGateways(res.data.data))
	}

	const handleProjectChange = (selectedValue: string) => {
		setSelectedProject(selectedValue)
	}

	const handleGatewayChange = (selectedValue: string) => {
		setSelectedGateway(selectedValue)
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
					/>

					<Datepicker
						placeholderText='From date'
					/>

					<button className={style.ReportsGenerateButton}>
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