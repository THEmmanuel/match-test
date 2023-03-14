import React from "react";
import style from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={style.NavBar}>
			<div className={style.NavBarWrapper}>
				<div className={style.NavLogoWrapper}>
					<span>logo</span>
					<span>Nav button</span>
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