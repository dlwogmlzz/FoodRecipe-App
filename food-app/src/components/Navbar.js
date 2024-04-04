import React, { useState } from 'react'
import Sidebar from './Sidebar';

import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	const [showSidebar, setShowSidebar] = useState(false);

	const links = [
		{
			name: "Home",
			path: "/",
			icon: faHome
		},
		{
			name: "Recipes",
			path: "/recipes",
			icon: faList
		},
		{
			name: "Settings",
			path: "/settings",
			icon: faCog
		},
	];	

	function closeSidebar() {
		setShowSidebar(false);
	}

	return (
		<>
		<div className="navbar container">
			<a href="#!" className="logo">J<span>ae</span>HEEs Food</a>
			<div className="nav-links">
				{/* <a href="#!">Home</a>
				<a href="#!">Recipes</a>
				<a href="#!">Settings</a> */}
				{ links.map(link => {
					<a href="#!" key={link.name}>{link.name}</a>
				})}
			</div>
			{/*  */}
			<div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
		</div>

		{/* true이면 렌더링 아니면 렌더링 되지 않는다 */}
		{/* sidebar를 클릭해야 닫힘. */}
		{ showSidebar && <Sidebar close={closeSidebar} links={links} /> }
	
		</>
	)
}
