import React from "react";
//import Navbar from "../sections/Navbar";
import Wip from "../sections/Wip";
import Hero from "../sections/Hero";
import Logos from "../sections/Logos";
import Startup from "../sections/Startup";
import Collaboration from "../sections/Collaboration";
//import Learn from "../sections/Learn";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Home() {
	return (
		<div className='HomePage'>
			<div className='MainContent'>
				{/*<Navbar />*/}
				<Wip />
				<Hero />
				<Logos />
				<Startup />
				<Collaboration />
				{/*<Learn />*/}
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default Home;
