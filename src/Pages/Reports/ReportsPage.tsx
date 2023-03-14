// Package Imports
import React, { useState, useEffect } from "react";
import axios from 'axios';
import style from './ReportsPage.module.css';

// Component imports
import Dropdown from "../../components/Dropdown/Dropdown";
import ReportsEmpty from "../../containers/ReportsEmpty/ReportsEmpty";
import Reports from "../../containers/Reports/Reports";

const API_URL = 'http://178.63.13.157:8090/mock-api/api'

const ReportsPage = () => {
	const [projects, setProjects] = useState({});
	const [gateways, setGateways] = useState({})

	const [selectedProject, setSelectedProject] = useState('')
	const [selectedGateway, setSelectedGateway] = useState('')

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
					/>

					<Dropdown
						type='gateway'
						values={gateways}
						onSelect = {handleGatewayChange}
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