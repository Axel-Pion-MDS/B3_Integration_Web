import "../../css/homepage/DealOfTheDay.css";
import {Link} from "react-router-dom";

const DealOfTheDay = () => {
	return (
		<div className={"deal-of-the-day"}>
			<Link to={"/paris"}>
				<div className={"img"}> </div>
				<div className={"card-title"}>
					<h6>Deal of the day</h6>
				</div>
				<div className={"card-body"}>
					<h2 className={"city"}>Amsterdam</h2>
					<p className={"hotel"}>Hotel Calypso</p>
					<p className={"duration"}>1 week</p>
				</div>
				<div className={"card-price"}>
					<p  className={"price"}>150€</p>
				</div>
			</Link>
		</div>
	);
}

export default DealOfTheDay;
