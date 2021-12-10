import "../../css/city/CityPictures.css";

const CityPictures = () => {
	const pictures = [
		{
			id: "1",
			image: "https://picsum.photos/seed/1/100/75",
			image_responsive: "https://picsum.photos/seed/1/225/130"
		},
		{
			id: "2",
			image: "https://picsum.photos/100/75?random=2",
			image_responsive: "https://picsum.photos/225/130?random=2"
		},
		{
			id: "3",
			image: "https://picsum.photos/100/75?random=3",
			image_responsive: "https://picsum.photos/225/130?random=3"
		},
		{
			id: "4",
			image: "https://picsum.photos/100/75?random=4",
			image_responsive: "https://picsum.photos/225/130?random=4"

		},
		{
			id: "5",
			image: "https://picsum.photos/100/75?random=5",
			image_responsive: "https://picsum.photos/225/130?random=5"
		},
		{
			id: "6",
			image: "https://picsum.photos/100/75?random=6",
			image_responsive: "https://picsum.photos/225/130?random=6"
		},
		{
			id: "7",
			image: "https://picsum.photos/100/75?random=7",
			image_responsive: "https://picsum.photos/225/130?random=7"
		},
		{
			id: "8",
			image: "https://picsum.photos/100/75?random=8",
			image_responsive: "https://picsum.photos/225/130?random=8"
		},
		{
			id: "9",
			image: "https://picsum.photos/100/75?random=9",
			image_responsive: "https://picsum.photos/225/130?random=9"
		},
		{
			id: "10",
			image: "https://picsum.photos/100/75?random=10",
			image_responsive: "https://picsum.photos/225/130?random=10"
		},
	]

	return (
		<div className={"viewed-picture"}>
			<img className={"image-unresponsive"} src={"https://picsum.photos/seed/1/440/275"} alt={"viewed"} />
			<img className={"image-responsive"} src={"https://picsum.photos/seed/1/990/500"} alt={"viewed"} />
			<div className={"pictures-list"}>
				<ul>
					{pictures.map(picture =>
						<li>
							<img className={"image-unresponsive"} src={picture.image} alt={`picture${picture.id}`} />
							<img className={"image-responsive"} src={picture.image_responsive} alt={`picture${picture.id}`} />
							<div id={`scope${picture.id}`}> </div>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default CityPictures;
