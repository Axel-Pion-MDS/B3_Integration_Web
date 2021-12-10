import "./css/Contact.css";

import ContactForm from "./components/contact/ContactForm";
import ContactInformations from "./components/contact/ContactInformations";

const Contact = () => {
	return (
		<div className={"contact"}>
			<div className={"banner"}>
				<h1 className={"contact-title"}>Contact</h1>
			</div>
			<div className={"form-informations"}>
				<ContactForm />
				<ContactInformations />
			</div>
		</div>
	);
}

export default Contact;
