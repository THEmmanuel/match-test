import React from 'react';
import './App.css';

// Component imports
import NavBar from './containers/NavBar/NavBar';
import SideBar from './containers/SideBar/SideBar';
import ReportsPage from './Pages/Reports/Reports';

function App() {
	return (
		<div className="App">
			<NavBar />

			<div className="PageWrapper">
				<SideBar />
				<ReportsPage />
			</div>
		</div>
	);
}

export default App;
