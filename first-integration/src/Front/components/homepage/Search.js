import "../../css/homepage/Search.css";

const Search = () => {
	return (
		<div className={"search"}>
			<h3>Find your holiday</h3>
			<form className={"holiday-search"}>
				<div className={"from-to"}>
					<div className={"from"}>
						<label htmlFor={"from"}>From :</label>
						<input type={"text"} id={"from"} name={"From"} placeholder={"Paris"} />
					</div>
					<div className={"to"}>
						<label htmlFor={"to"}>To :</label>
						<input type={"text"} id={"to"} name={"To"} placeholder={"Malte"} />
					</div>
				</div>
				<div className={"date-duration"}>
					<div className={"date"}>
						<label htmlFor={"date"}>Date :</label>
						<input type={"date"} id={"date"} name={"Date"} value={"2018-11-04"} />
					</div>
					<div className={"duration"}>
						<label htmlFor={"duration"}>Duration :</label>
						<select id={"duration"} name={"Duration"}>
							<option value={"3"}>3 days</option>
							<option value={"6"}>6 days</option>
							<option value={"12"}>12 days</option>
							<option value={"24"}>24 days</option>
							<option value={"48"}>48 days</option>
						</select>
					</div>
				</div>
				<button className={"find"}>Find !</button>
			</form>
		</div>
	);
}

export default Search;
