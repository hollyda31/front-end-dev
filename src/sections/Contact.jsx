import "./contact.css";

function Contact() {
	return (
		<div className='contactSection'>
			<div className='contactMore'>
				<ul className='contactLinks'>
					<a href='https://www.linkedin.com/in/hollyantle'>
						<li className='contactItem'>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg'
								alt='LinkedIn Logo'
							></img>
						</li>
					</a>
					<a href='https://github.com/hollyda31'>
						<li className='contactItem'>
							<img
								src='https://www.kindpng.com/picc/m/128-1280192_github-logo-png-github-png-transparent-png.png'
								alt='GitHub Logo'
							></img>
						</li>
					</a>
					<a href='https://stackoverflow.com/users/19416434/holly'>
						<li className='contactItem'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4P7SV8XmN52EqpYQWYQlgmKwYOPbDZr-I6ijxozMl108wQBppaHUh2ft22baJgD5xe0U&usqp=CAU'
								alt='Stack Overflow Logo'
							></img>
						</li>
					</a>
					<a href='mailto:holly@hollyantle.com'>
						<li className='contactItem'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZ3gdu8qWgbiIZZdYCVszJdoIMQVIp8RF4g&usqp=CAU'
								alt='Email'
							></img>
						</li>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default Contact;

/*TODO: add links & additional pages*/
