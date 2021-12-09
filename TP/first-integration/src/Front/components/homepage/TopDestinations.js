import "../../css/homepage/TopDestinations.css";
import {Link} from "react-router-dom";

const TopDestinations = () => {
	const cards = [
		{
		 	id: "1",
			image: "https://picsum.photos/275/275?random=1",
			image_responsive: "https://picsum.photos/990/500?random=1",
			city: "Sydney",
		 	hotel: "Hotel Calypso",
		 	duration: "1 week",
		 	price: "150€"
	 	},
		{
			id: "2",
			image: "https://picsum.photos/275/275?random=2",
			image_responsive: "https://picsum.photos/990/500?random=2",
			city: "Rio",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "3",
			image: "https://picsum.photos/275/275?random=3",
			image_responsive: "https://picsum.photos/990/500?random=3",
			city: "Cusco",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "4",
			image: "https://picsum.photos/275/275?random=4",
			image_responsive: "https://picsum.photos/990/500?random=4",
			city: "New Delhi",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "5",
			image: "https://picsum.photos/275/275?random=5",
			image_responsive: "https://picsum.photos/990/500?random=5",
			city: "Hong Kong",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "6",
			image: "https://picsum.photos/275/275?random=6",
			image_responsive: "https://picsum.photos/990/500?random=6",
			city: "Katmandou",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "7",
			image: "https://picsum.photos/275/275?random=7",
			image_responsive: "https://picsum.photos/990/500?random=7",
			city: "Tokyo",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "8",
			image: "https://picsum.photos/275/275?random=8",
			image_responsive: "https://picsum.photos/990/500?random=8",
			city: "Lisbonne",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
	];

	return (
		<div className={"top-destinations"}>
			<h2>Top Destinations</h2>
			<div className={"destination-cards"}>
				<Link to={"/paris"}>
					{cards.map(card =>
						<div className={"card"} key={`card${card.id}`} id={`card${card.id}`}>
							<img className={"img-unresponsive"} src={`${card.image}`} alt={`${card.city}-card`} name={`${card.city}-image`} />
							<img className={"img-responsive"} src={`${card.image_responsive}`} alt={`${card.city}-card`} name={`${card.city}-image`} />
							<div className={"card-gradient"}> </div>
							<h3 className={"card-title"}>{card.city}</h3>
							<div className={"card-body"}>
								<p className={"hotel"}>{card.hotel}</p>
								<p className={"duration"}>{card.duration}</p>
							</div>
							<div className={"card-price"}>
								<p className={"price"}>{card.price}</p>
							</div>
						</div>
					)}
				</Link>
			</div>
			<button className={"see-more"}>See more</button>
		</div>
	);
}

export default TopDestinations;
