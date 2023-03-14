import React from "react";
import style from './ReportsPage.module.css';

// Component imports
import Dropdown from "../../components/Dropdown/Dropdown";
import ReportsEmpty from "../../containers/ReportsEmpty/ReportsEmpty";
import Reports from "../../containers/Reports/Reports";

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
					<Dropdown />
					<Dropdown />
					<Dropdown />
					<button className={style.ReportsGenerateButton}>
						Generate Report
					</button>
				</div>
			</div>

			<div>
				{/* <ReportsEmpty /> */}
				<Reports/>
			</div>
		</section>
	)
}

export default ReportsPage