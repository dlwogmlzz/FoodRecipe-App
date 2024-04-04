import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// links 프롭스로 연결
export default function Sidebar({links, close}) {
	return (
		<div className="sidebar"onClick={close}>
			{links.map(link => (
				<a className="sidebar-link" href="#!" key={link.name}>
					<FontAwesomeIcon icon={link.icon} />
					{link.name}
				</a>
			))}
		</div>
	)
}

