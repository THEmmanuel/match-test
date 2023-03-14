import React from "react";
import style from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={style.NavBar}>
			<div className={style.NavBarWrapper}>
				<div>
					<span>logo</span>
					<span>Nav button</span>
				</div>

				<div>
					<span>UserIMAGE</span>
					<span>User name</span>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;