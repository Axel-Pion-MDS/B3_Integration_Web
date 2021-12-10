import "../../css/contact/ContactInformations.css";

const ContactInformations = () => {
	return (
		<div className={"contact-informations"}>
			<div className={"contact-info"}>
				<div className={"pipe-title"}>
					<div className={"pipe"}> </div>
					<h4 className={"title"}>Address</h4>
				</div>
				<div className={"contact-body"}>
					<p>15 rue de la paix</p>
					<p>75010</p>
					<p>France</p>
					<p>+1 0805-540-801</p>
					<a href={"#"}>Other addresses</a>
				</div>
			</div>
			<div className={"contact-info"}>
				<div className={"pipe-title"}>
					<div className={"pipe"}> </div>
					<h4 className={"title"}>Information</h4>
				</div>
				<div className={"contact-body"}>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan.</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInformations;
