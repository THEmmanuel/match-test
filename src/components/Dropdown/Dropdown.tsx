import React, { useState } from "react";
import style from './Dropdown.module.css';

const Dropdown = (values: Array<String>) => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionChange = (event: { target: { value: any; }; }) => {
		setSelectedOption(event.target.value);
	};

	return (
		<select value={selectedOption} onChange={handleOptionChange} className={style.Dropdown}>
			<option value="" disabled selected>Select an option</option>

			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
	);
}

export default Dropdown;