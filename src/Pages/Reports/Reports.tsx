import React from "react";
import style from './Reports.module.css';

// Component imports
import Dropdown from "../../components/Dropdown/Dropdown";

const ReportsPage = () => {
	return (
		<section className={style.ReportsPage}>
			<div className={style.ReportsTopWrapper}>
				<div className={style.ReportsInfo}>
					<h2>Reports</h2>
					<span>Easily generate a report of your transactions</span>
				</div>
				
				<div className={style.ReportsFilterWrapper}>
					<Dropdown/>
					<span>Input</span>
					<span>Input</span>
					<span>Input</span>
					<button className={style.ReportsGenerateButton}>
						Generate Report
					</button>
				</div>
			</div>
		</section>
	)
}

export default ReportsPage