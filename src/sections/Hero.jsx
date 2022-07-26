import "./hero.css";
import Name from "./Name";
import Title from "./Title";

const Hero = () => {
	return (
		<div className='hero-container'>
			<div className='hero-overlay'>
			<div className='hero-internal'>
				<span className='heroName'>
					<Name />
				</span>
				<span className='heroTitle'>
					<Title />
				</span>
				</div>
			</div>
		</div>
	);
};

export default Hero;
