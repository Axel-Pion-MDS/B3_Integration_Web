import "./css/City.css";

import CityPictures from "./components/city/CityPictures";
import CityPresentation from "./components/city/CityPresentation";
import CityDescriptions from "./components/city/CityDescriptions";
import CityAdvised from "./components/city/CityAdvised";

const City = () => {
	return (
		<div className={"city"}>
			<div className={"city-header"}>
				<CityPictures />
				<CityPresentation />
			</div>
			<CityDescriptions />
			<CityAdvised />
		</div>
	);
}

export default City;
