import React from "react";
import style from './NavBar.module.css'

// Icon imports
import logo from '../../assets/b-color 1.svg';
import navBtn from '../../assets/navToggleIcon.svg'

const NavBar = () => {
	return (
		<nav className={style.NavBar}>
			<div className={style.NavBarWrapper}>
				<div className={style.NavLogoWrapper}>
					<img src={logo} alt="" />
					<button className='IconButton'>
						<img src={navBtn} alt="" />
					</button>
				</div>

				<div className={style.UserInfoWrapper}>
					<span>JD</span>
					<span>User name</span>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;