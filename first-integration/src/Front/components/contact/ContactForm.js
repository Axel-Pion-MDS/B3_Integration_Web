import "../../css/contact/ContactForm.css";

const ContactForm = () => {
	return (
		<form className={"contact-form"}>
			<div className={"first-lastname"}>
				<div className={"label-input"}>
					<label htmlFor={"first-name"}>Firstname :</label>
					<input type={"text"} id={"first-name"} required />
				</div>
				<div className={"label-input"}>
					<label htmlFor={"last-name"}>Lastname :</label>
					<input type={"text"} id={"last-name"} required />
				</div>
			</div>
			<div className={"mail-agency"}>
				<div className={"label-input"}>
					<label htmlFor={"email"}>Email :</label>
					<input type={"email"} id={"email"} required />
				</div>
				<div className={"label-input"}>
					<label htmlFor={"agency"}>Nearest agency :</label>
					<select id={"agency"}>
						<option value={"paris"}>Paris</option>
						<option value={"london"}>London</option>
						<option value={"berlin"}>Berlin</option>
						<option value={"beijing"}>Beijing</option>
						<option value={"seoul"}>Seoul</option>
						<option value={"tokyo"}>Tokyo</option>
					</select>
				</div>
			</div>
			<label htmlFor={"message"}>Message :</label>
			<textarea id={"message"}> </textarea>
			<button type={"button"} value={"send"}>Send</button>
		</form>
	);
}

export default ContactForm;
