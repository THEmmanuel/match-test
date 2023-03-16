import React, { useState } from "react";
import calendarIcon from '../../assets/calendarIcon.svg'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import style from './Datepicker.module.css';

const Datepicker = (props: any) => {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (date:any) => {
		props.onSelect(date);
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

			{/* {selectedDate && (
				<p>Selected date:{formatDate(selectedDate)}</p>
			)} */}

			<img src={calendarIcon} alt="" />
		</div>
	);
};

export default Datepicker;
