import React from 'react';
import './App.css';

// Component imports
import NavBar from './containers/NavBar/NavBar';
import SideBar from './containers/SideBar/SideBar';

function App() {
	return (
		<div className="App">
			<NavBar />

			<div>
				<SideBar />
				match test
			</div>
		</div>
	);
}

export default App;
