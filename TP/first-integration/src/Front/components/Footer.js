import "../css/Footer.css";
import icon1 from "../assets/img/calculator.png";
import icon2 from "../assets/img/discount.png";
import icon3 from "../assets/img/support.png";
import icon4 from "../assets/img/online-payment.png";

const Footer = () => {
	return (
		<div className={"footer"}>
			<div className={"icon-link"}>
				<ul>
					<li>
						<a href={"#"}>
							<img src={icon1} alt={"icon1"}/>
							<p>Compare prices</p>
						</a>
					</li>
					<li>
						<a href={"#"}>
							<img src={icon2} alt={"icon2"} />
							<p>Get the best deals</p>
						</a>
					</li>
					<li>
						<a href={"#"}>
							<img src={icon3} alt={"icon3"} />
							<p>7/7 support</p>
						</a>
					</li>
					<li>
						<a href={"#"}>
							<img src={icon4} alt={"icon4"} />
							<p>Secure online payment</p>
						</a>
					</li>
				</ul>
			</div>
			<div className={"links-address-call"}>
				<div className={"links"}>
					<h4>Links</h4>
					<ul>
						<li><a href={"../Homepage.js"}>Home</a></li>
						<li><a href={"../Paris.js"}>Destinations</a></li>
						<li><a href={"#"}>Deals</a></li>
						<li><a href={"../Contact.js"}>Contact</a></li>
						<li><a href={"../Terms_conditions.js"}>Terms & Conditions</a></li>
					</ul>
				</div>
				<div className={"address"}>
					<h4>Address</h4>
					<p>15 rue de la paix</p>
					<p>75010, Paris</p>
					<p>France</p>
					<p><a href={"#"}>Other addresses</a></p>
				</div>
				<div className={"call"}>
					<h4>Call Us</h4>
					<p>+1 0805-540-801</p>
				</div>
			</div>
			<div className={"empty-div"}>

			</div>
		</div>
	);
}

export default Footer;
