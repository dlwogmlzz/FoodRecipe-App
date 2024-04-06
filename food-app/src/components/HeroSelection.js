import CustomImage from './CustomImage'

export default function HeroSection() {
	const images = [
		"/img/gallery/img-1.jpg",
		"/img/gallery/img-13.jpg",
		"/img/gallery/img-15.jpg",
		"/img/gallery/img-4.jpg",
		"/img/gallery/img-5.jpg",
		"/img/gallery/img-8.jpg",
		"/img/gallery/img-10.jpg",
		"/img/gallery/img-16.jpg",
		"/img/gallery/img-9.jpg",
	]

	return (
		<div className="section hero"> 
			<div className="col typography">
				<h1 className="title">The food I ate in Tokyo?</h1>
				<p className="info">JaeHEEs Food is a place 
				where you can please your soul and tummy with delicious food recipes of all cuisine. and our service is absolutely free. so start exploring now.
				</p>
				<button className="btn">explore now</button>
			</div>
			<div className="col gallery">
				{ images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={"90%"}/>
				)) }
			</div>
		</div>
	)
} 