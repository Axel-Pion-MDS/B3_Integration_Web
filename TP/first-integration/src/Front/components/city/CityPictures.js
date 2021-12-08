import "../../css/city/CityPictures.css";

const CityPictures = () => {
	const pictures = [
		{
			id: "1",
			image: "https://picsum.photos/100/75?random=1",
		},
		{
			id: "2",
			image: "https://picsum.photos/100/75?random=2",
		},
		{
			id: "3",
			image: "https://picsum.photos/100/75?random=3",
		},
		{
			id: "4",
			image: "https://picsum.photos/100/75?random=4",
		},
		{
			id: "5",
			image: "https://picsum.photos/100/75?random=5",
		},
		{
			id: "6",
			image: "https://picsum.photos/100/75?random=6",
		},
		{
			id: "7",
			image: "https://picsum.photos/100/75?random=7",
		},
		{
			id: "8",
			image: "https://picsum.photos/100/75?random=8",
		},
		{
			id: "9",
			image: "https://picsum.photos/100/75?random=9",
		},
		{
			id: "10",
			image: "https://picsum.photos/100/75?random=10",
		},
	]

	return (
		<div className={"viewed-picture"}>
			<img src={"https://picsum.photos/440/275"} alt={"viewed"} />
			<div className={"pictures-list"}>
				<ul>
					{pictures.map(picture =>
						<li>
							<img src={picture.image} alt={`picture${picture.id}`} />
							<div id={`scope${picture.id}`}> </div>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default CityPictures;
