import React from "react";
import style from './NavBar.module.css'

// Icon imports
import logo from '../../assets/b-color 1.svg';
import navBtn from '../../assets/navToggleIcon.svg'

const firstName = "John";
const lastName = "Doe";

const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();


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
					<span className={style.UserInitials}>{initials}</span>
					<span className={style.Username}>{firstName} {lastName}</span>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;