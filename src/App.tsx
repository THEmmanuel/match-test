import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import './App.css';

// Component imports
import NavBar from './containers/NavBar/NavBar';
import SideBar from './containers/SideBar/SideBar';
import ReportsPage from './Pages/Reports/ReportsPage';

// context imports
import { dataContext } from "./contexts/dataContext";

function App() {
	const API_URL = 'http://178.63.13.157:8090/mock-api/api'

	const [gateways, setGateways] = useState({});
	const [projects, setProjects] = useState({});

	const getProjects = () => {
		axios.get(`${API_URL}/projects`)
			.then(res => setProjects(res.data.data))
	}

	const getGateways = () => {
		axios.get(`${API_URL}/gateways`)
			.then(res => setGateways(res.data.data))
	}

	useEffect(() => {
		getProjects()
		getGateways()
	}, [])

	return (
		<div className="App">
			<dataContext.Provider
				value={{
					gateways,
					setGateways,
					projects,
					setProjects
				}}
			>
				<NavBar />

				<div className="PageWrapper">
					<SideBar />
					<ReportsPage />
				</div>
			</dataContext.Provider>
		</div>
	);
}

export default App;