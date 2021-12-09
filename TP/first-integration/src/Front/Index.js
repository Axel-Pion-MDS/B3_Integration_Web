import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./Homepage";
import City from "./City";
import Contact from "./Contact";
import Terms from "./Terms_conditions";
import Error from "./Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/Index.css";

const Index = () => {
	return (
		<div className={"container"}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={ <Homepage /> } />
					<Route path='/paris' element={ <City /> } />
					<Route path='/contact' element={ <Contact /> } />
					<Route path='/Terms' element={ <Terms /> } />
					<Route path={'*'} element={ <Error /> } />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default Index;
