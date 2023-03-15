import React, { useState } from "react";
import calendarIcon from '../../assets/calendarIcon.svg'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import { FaCalendarAlt } from 'react-icons/fa';
import style from './Datepicker.module.css';

const Datepicker = (props: any) => {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (date: any) => {
		setSelectedDate(date);
	};

	return (
		<div className={style.Datepicker}>
			<DatePicker
				selected={selectedDate}
				onChange={handleDateChange}
				dateFormat="yyyy-MM-dd"
				placeholderText={props.placeholderText}
				className={style.customDatepicker}
			/>

			<img src={calendarIcon} alt="" />
		</div>
	);
};

export default Datepicker;