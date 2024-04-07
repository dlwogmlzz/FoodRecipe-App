import ChiefsCard from './ChiefsCard'

const chiefs = [
	{
		name: "Baek",
		img: "/img/top-chiefs/baek.jpg",
		recipesCount: "10",
		cuisine: "Korean",
	},
	{
		name: "Gordon",
		img: "/img/top-chiefs/gordon.jpg",
		recipesCount: "05",
		cuisine: "British",
	},
	{
		name: "Jamie",
		img: "/img/top-chiefs/jamie.jpg",
		recipesCount: "13",
		cuisine: "British",
	},
	{
		name: "Keller",
		img: "/img/top-chiefs/keller.jpg",
		recipesCount: "08",
		cuisine: "French",
	},
	{
		name: "Kwon",
		img: "/img/top-chiefs/kwon.jpg",
		recipesCount: "09",
		cuisine: "korean",
	},
	{
		name: "Lee",
		img: "/img/top-chiefs/lee.jpg",
		recipesCount: "04",
		cuisine: "korean",
	},
]
export default function ChiefsSection() {
	return(
		<div className="section chiefs">
			<h1 className="title">Our Top chiefs</h1>
			<div className="top-chiefs-container">
				{/* <ChiefsCard />
				<ChiefsCard />
				<ChiefsCard />
				<ChiefsCard />
				<ChiefsCard />
				<ChiefsCard /> */}

				{ chiefs.map(chief => <ChiefsCard key={chief.name} chief={chief}/>) }
			</div>
		</div>
	)
}