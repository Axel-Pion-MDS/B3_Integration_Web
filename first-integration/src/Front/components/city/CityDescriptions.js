import "../../css/city/CityDescription.css";

const CityDescriptions = () => {
	const texts = [
		{
			title: "Description",
			detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac neque viverra, condimentum tortor sit amet, consectetur lacus. Vivamus at pharetra neque. Sed mattis lacus neque, ac lobortis neque porta vel. Nam dapibus justo id mattis hendrerit. Morbi nec ante urna. Ut congue risus dui, iaculis efficitur dui accumsan vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque mauris est, ultrices ac pretium molestie, porttitor. "
		},
		{
			title: "Details",
			detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio. Vestibulum viverra ac libero ac laoreet. Duis et est ultrices, cursus metus non, fringilla lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas non sapien mattis, ornare nisi nec, pulvinar turpis. Aliquam mi massa, fermentum non nisi vitae, feugiat accumsan ante. Etiam at auctor orci, quis rutrum mi. Donec odio risus, faucibus sed porta ut, rhoncus sit amet turpis. Nam maximus, ante.",
		},
		{
			title: "Other",
			detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod libero, sed mollis ligula. Etiam sodales ex quis purus varius, eget suscipit elit accumsan. Donec sem tellus, lobortis a magna eu, tempus fermentum odio. Vestibulum viverra ac libero ac laoreet. Duis et est ultrices, cursus metus non, fringilla lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas non sapien mattis, ornare nisi nec, pulvinar turpis. Aliquam mi massa, fermentum non nisi vitae, feugiat accumsan ante. Etiam at auctor orci, quis rutrum mi. Donec odio risus, faucibus sed porta ut, rhoncus sit amet turpis. Nam maximus, ante.",
		}
	];

	return (
		<div className={"city-description"}>
			<div className={"banner"}>
				<h1 className={"city"}>Paris</h1>
				<p className={"motivation"}>A perfect destination to meet grumpy people</p>
			</div>
			<div className={"descript-details-other"}>
				{ texts.map(text =>
					<div className={"description"}>
						<div className={"pipe-title"}>
							<div className={"pipe"}> </div>
							<h4 className={"title"}>{text.title}</h4>
						</div>
						<p className={"detail"}>{text.detail}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default CityDescriptions;
