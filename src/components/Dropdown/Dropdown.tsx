import React, { useState } from "react";
import style from "./Dropdown.module.css";

const Dropdown = (props: any) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const options = Object.values(props.values).map((value:any) => (
    <option key={props.type === 'projects' ? value.projectId : value.gatewayId} value={value.name}>
      {value.name}
    </option>
  ));

  return (
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      className={style.Dropdown}
    >
      <option value="" disabled defaultValue>
        Select an option
      </option>
      {options}
    </select>
  );
};

export default Dropdown;
