import "../../css/city/CityAdvised.css";
import {Link} from "react-router-dom";

const CityAdvised = () => {
	const advices = [
		{
			id: "1",
			image: "https://picsum.photos/370/250?random=1",
			image_responsive: "https://picsum.photos/990/500?random=1",
			city: "Katmandou",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "2",
			image: "https://picsum.photos/370/250?random=2",
			image_responsive: "https://picsum.photos/990/500?random=2",
			city: "Tokyo",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		},
		{
			id: "3",
			image: "https://picsum.photos/370/250?random=3",
			image_responsive: "https://picsum.photos/990/500?random=3",
			city: "Lisbonne",
			hotel: "Hotel Calypso",
			duration: "1 week",
			price: "150€"
		}
	];

	return (
		<div className={"city-advised"}>
			<h3 className={"advice"}>You may also like</h3>
			<div className={"destination-advised"}>
				<Link to={"/paris"}>
					{advices.map(advice =>
						<div className={"card"} key={`card${advice.id}`} id={`card${advice.id}`}>
							<img className={"image-unresponsive"} src={`${advice.image}`} alt={`${advice.city}-card`} name={`${advice.city}-image`} />
							<img className={"image-responsive"} src={`${advice.image_responsive}`} alt={`${advice.city}-card`} name={`${advice.city}-image`} />
							<div className={"card-gradient"}> </div>
							<h2 className={"card-title"}>{advice.city}</h2>
							<div className={"card-body"}>
								<p className={"hotel"}>{advice.hotel}</p>
								<p className={"duration"}>{advice.duration}</p>
							</div>
							<div className={"card-price"}>
								<p className={"price"}>{advice.price}</p>
							</div>
						</div>
					)}
				</Link>
			</div>
		</div>
	);
}

export default CityAdvised;
