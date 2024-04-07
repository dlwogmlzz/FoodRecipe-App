export default function ImproveSkills() {
	
	const list = [
		"How did it taste?",
		"How do you make it?",
		"How much is the price?",
		"Where is the store located?",
		"Are you willing to visit again?",
		"Get ranked"
	];

	return (
		<div className="section restaurant-info"> 
			<div className="col img">
				<img src="/img/gallery/img-18.jpg" alt="" />
			</div>
			<div className="col typography">
				<h1 className="title">A recently visited restaurant</h1>
				{list.map((item, index) => (
					<p className="restaurant-info" key={index}>{item}</p>
				))}
				<button className="btn">signup now</button>
			</div>
	</div>
	)
}