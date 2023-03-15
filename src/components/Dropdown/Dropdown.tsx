import React, { useState } from "react";
import style from "./Dropdown.module.css";

const Dropdown = (props: any) => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleOptionChange = (event: any) => {
		const selectedValue = event.target.value;
		if (selectedValue === "all") {
			setSelectedOption("all"); // set the selected option to "all"
			props.onSelect("");
		} else {
			const selectedItem = Object.values(props.values).find((value: any) => {
				if (props.type === "projects") {
					return value.projectId === selectedValue;
				} else {
					return value.gatewayId === selectedValue;
				}
			});
			setSelectedOption(selectedValue);
			props.onSelect(selectedItem);
		}
	};



	const options = Object.values(props.values).map((value: any) => (
		<option key={props.type === 'projects' ? value.projectId : value.gatewayId} value={props.type === 'projects' ? value.projectId : value.gatewayId}>
			{value.name}
		</option>
	));

	return (
		<select
			value={selectedOption}
			onChange={handleOptionChange}
			className={style.Dropdown}
		>
			<option value="" disabled>
				{props.placeholderText}
			</option>

			<option value="all">
				All
			</option>

			{options}
		</select>

	);
};

export default Dropdown;
