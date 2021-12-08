import Search from "./components/homepage/Search";
import DealOfTheDay from "./components/homepage/DealOfTheDay";
import TopDestinations from "./components/homepage/TopDestinations";

import "./css/Homepage.css";

const Homepage = () => {
	return (
		<div className={"homepage"}>
			<div className={"search-deal"}>
				<Search />
				<DealOfTheDay />
			</div>
			<TopDestinations />
		</div>
	);
}

export default Homepage;
