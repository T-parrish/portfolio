import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => (
	<header className="header">
		<div className="content-container">
			<div className="nav__wrapper">
				<div className="nav-box__one fade--top">
					<h1 className="nav__title">Taylor Parrish</h1>
					<div className="nav__links">
						<NavLink to='/' activeClassName="is-active" exact={true}>Home </NavLink>
						<NavLink to='/portfolio' activeClassName="is-active">Portfolio </NavLink>
						<NavLink to='/boxy' activeClassName="is-active">Boxy </NavLink>
					</div>
				</div>
				<div className="nav-box__two fade--in">
					<a href="https://twitter.com/twpearish"><i className="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com/et.and.me"><i className="fab fa-instagram"></i></a>
					<a href="www.linkedin.com/in/taylor-parrish-55663379"><i className="fab fa-linkedin-in"></i></a>
				</div>
			</div>
		</div>
	</header>
);

export default Header;