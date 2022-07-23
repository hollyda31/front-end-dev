import "./hero.css";
import Name from "./Name";
import Title from "./Title";
import Logos from "./Logos";

const Hero = () => {
	return (
		<div className='hero-container'>
			<div className='hero-internal'>
				<span className='heroName'>
				<Name />
				</span>
				<span className='heroTitle'>
				<Title />
				</span>
				<span className='heroLogos'>
				<Logos />
				</span>
			</div>
		</div>
	);
};

export default Hero;
