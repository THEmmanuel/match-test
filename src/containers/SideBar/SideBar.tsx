import React from "react";
import style from './SideBar.module.css';

const SideBar = () => {
	return (
		<div className={style.SideBar}>
			<div className={style.SideBarIconsWrapper}>
				<span>Icon</span>
				<span>Icon</span>
				<span>Icon</span>
				<span>Icon</span>
			</div>
		</div>
	)
}

export default SideBar;