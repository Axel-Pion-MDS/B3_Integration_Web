import "./css/Terms_conditions.css";

const Terms_conditions = () => {
	const sections = [
		{
			title: "Introduction",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Intellectual Property Rights",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Restrictions",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Your Content",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "No warranties",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Limitation of liability",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Indemnification",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Severability",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Variation of Terms",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Assignment",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Entire Agreement",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		},
		{
			title: "Governing Law & Jurisdiction",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio.",
		}
	]

	return (
		<div className={"terms"} id={"top"}>
			<div className={"banner"}>
				<h1 className={"term-title"}>Terms & Conditions</h1>
			</div>
			{ sections.map(section =>
				<div className={"term-info"}>
					<div className={"pipe-title"}>
						<div className={"pipe"}> </div>
						<h4 className={"title"}>{section.title}</h4>
					</div>
					<div className={"term-body"}>
						<p>{section.description}</p>
					</div>
				</div>
			)}
		</div>
	);
 }

 export default Terms_conditions;
