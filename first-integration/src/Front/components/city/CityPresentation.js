import "../../css/city/CityPresentation.css";

const CityPresentation = () => {
	return (
		<div className={"city-presentation"}>
			<h2 className={"city"}>Paris</h2>
			<div className={"hotel-stars"}>
				<h6 className={"hotel"}>Hôtel Calypso</h6>
				<span className={"stars"}>
					<img src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/star_2b50.png"} alt={"star1"} />
					<img src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/star_2b50.png"} alt={"star2"} />
					<img src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/star_2b50.png"} alt={"star3"} />
				</span>
			</div>
			<p className={"duration"}>1 week</p>
			<p className={"presentation"}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Praesent auctor interdum eros mollis elementum.
				In eget mollis nisi. In at neque nec orci vestibulum consequat et ut ante.
				Nunc a facilisis ipsum. Nunc ac arcu augue.
				Proin faucibus rutrum sapien, volutpat efficitur nisl venenatis ut.
				Cras nunc mauris, mattis vel.
			</p>
			<button className={"choose-date"}>Choose a date</button>
			<div className={"card-price"}>
				<p className={"price"}>150€</p>
			</div>
		</div>
	);
}

export default CityPresentation;
