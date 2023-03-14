import React from "react";
import style from './Reports.module.css';

const ReportsPage = () => {
	return (
		<section className={style.ReportsPage}>
			<div className={style.ReportsTopWrapper}>
				<div className={style.ReportsInfo}>
					<h2>Reports</h2>
					<span>Easily generate a report of your transactions</span>
				</div>
				
				<div className={style.ReportsFilterWrapper}>
					<select>Input</select>
					<span>Input</span>
					<span>Input</span>
					<span>Input</span>
					<span>Input</span>
				</div>
			</div>
		</section>
	)
}

export default ReportsPage