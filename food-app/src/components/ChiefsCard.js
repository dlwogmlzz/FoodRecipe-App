import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function ChiefsCard({chief}) {
	return (
		<div className="chief-card">
			<img src={chief.img} alt="" />
			<div className="chief-card-info">
				<h3 className="chief-card-name">{chief.name}</h3>
				<p className="chief-recipe-count">Recipes: {chief.recipesCount}</p>
				<p className="chief-cuisine">Cuisine: {chief.cuisine}</p>
				<p className="chief-icons">
					<FontAwesomeIcon icon={faFacebook} />
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faInstagram} />
				</p>
			</div>
		</div>
	)
}