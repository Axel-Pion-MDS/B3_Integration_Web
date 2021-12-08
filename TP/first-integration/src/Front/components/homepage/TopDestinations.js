import "../../css/homepage/TopDestinations.css";

const TopDestinations = () => {
	const cards = [
		{
			 id: "1",
			 city: "Sydney",
			 hotel: "Hotel Calypso",
			 duration: "1 week",
			 price: "150€"
	 	},
		{
			id: "2",
			city: "Rio",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "3",
			city: "Cusco",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "4",
			city: "New Delhi",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "5",
			city: "Hong Kong",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "6",
			city: "Katmandou",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "7",
			city: "Tokyo",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "8",
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
				<a href={"#"}>
					{cards.map(card =>
						<div className={"card"} key={`card${card.id}`} id={`card${card.id}`}>
							{/*<img src={`${card.image}`} alt={`${card.city}-card`} name={`${card.city}-image`} />*/}
							<div className={"img"}> </div>
							<h2 className={"card-title"}>{card.city}</h2>
							<div className={"card-body"}>
								<p className={"hotel"}>{card.hotel}</p>
								<p className={"duration"}>{card.duration}</p>
							</div>
							<div className={"card-price"}>
								<p className={"price"}>{card.price}</p>
							</div>
						</div>
					)}
				</a>
			</div>
			<button className={"see-more"}>See more</button>
		</div>
	);
}

export default TopDestinations;
