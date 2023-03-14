import React from "react";
import style from './Reports.module.css';

// Component imports
import Dropdown from "../../components/Dropdown/Dropdown";
import ReportsEmpty from "../../containers/ReportsEmpty/ReportsEmpty";

const ReportsPage = () => {
	return (
		<section className={style.ReportsPage}>
			<div className={style.ReportsTopWrapper}>
				<div className={style.ReportsInfo}>
					<h2 className={style.ReportsHeading}>Reports</h2>
					<span className={style.ReportsText}>Easily generate a report of your transactions</span>
				</div>

				<div className={style.ReportsFilterWrapper}>
					<Dropdown />
					<span>Input</span>
					<span>Input</span>
					<span>Input</span>
					<button className={style.ReportsGenerateButton}>
						Generate Report
					</button>
				</div>
			</div>

			<div>
				<ReportsEmpty/>
			</div>
		</section>
	)
}

export default ReportsPage