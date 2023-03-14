import React from 'react';
import style from './ReportsEmpty.module.css';

// Image imports
import ReportsEmptyImage from '../../assets/reportsEmptyImage.svg';

const ReportsEmpty = () => {
	return (
		<div className={style.ReportsEmpty}>
			<h2>No reports</h2>
			<span className={style.ReportsEmptyText}>
				Currently you have no data for the reports to be generated.
				Once you start generating traffic through the Balance application
				the reports will be shown.
			</span>
			<img src={ReportsEmptyImage} alt="" />
		</div>
	)
}

export default ReportsEmpty;