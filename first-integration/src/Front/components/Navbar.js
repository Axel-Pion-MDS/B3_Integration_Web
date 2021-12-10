import "../css/Navbar.css";
import logo from "../assets/img/plane.png";

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={"navbar"}>
			<div className={"nav-logo"}>
				<Link className={"logo"} to="/">
					<img src={logo} alt={"plane-logo"} />
					<p className={"logo-title"}>TRAVEL AGENCY</p>
				</Link>
			</div>
			<div className={"nav-links"}>
				<ul>
					<li>
						<Link className={"home active-link"} to="/">Home</Link>
					</li>
					<li>
						<Link className={"destination"} to="/paris">Destinations</Link>
					</li>
					<li>
						<Link className={"deals"} to="/#">Deals</Link>
					</li>
					<li>
						<Link className={"contact"} to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
