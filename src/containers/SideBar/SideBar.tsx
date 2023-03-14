import React from "react";
import style from './SideBar.module.css';

// Icon imports
import icon1 from '../../assets/sidebarIcon1.svg'
import icon2 from '../../assets/sidebarIcon2.svg'
import icon3 from '../../assets/sidebarIcon3.svg'
import chartIcon from '../../assets/sidebarChartIcon.svg'
import powerIcon from '../../assets/sidebarPowerIcon.svg'


const SideBar = () => {
	return (
		<div className={style.SideBar}>
			<div className={style.SideBarIconsWrapper}>
				<button className = 'IconButton'>
					<img src={icon1} alt="" />
				</button>

				<button className = 'IconButton'>
					<img src={icon2} alt="" />
				</button>

				<button className = 'IconButton'>
					<img src={icon3} alt="" />
				</button>

				<button className = 'IconButton'>
					<img src={chartIcon} alt="" />
				</button>

				<button className = 'IconButton'>
					<img src={powerIcon} alt="" />
				</button>
			</div>
		</div>
	)
}

export default SideBar;