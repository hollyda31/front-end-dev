

function Navbar() {
	return (
		<div className='Navbar'>
			<div className='Menu'>
				<ul className='NavMenu'>
					<li className='NavItem'>
						<a href='/index'>Home</a>
					</li>
					<li className='NavItem'><a href='/Skills'>Skills</a></li>
					<li className='NavItem'><a href='/Resume'>Resume</a></li>
					<li className='NavItem'><a href='/Portfolio'>Portfolio</a></li>
					<li className='NavItem'><a href='/Contact'>Contact</a></li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;