import "./navbar.css";

function Navbar() {
	return (
		<div className='Navbar'>
			<div className='Menu'>
				<ul className='NavMenu'>
					<li className='NavItem'>
						<a href='../index.js'>Home</a>
					</li>
					<li className='NavItem'>Skills</li>
					<li className='NavItem'>Resume</li>
					<li className='NavItem'>Portfolio</li>
					<li className='NavItem'>Contact</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;