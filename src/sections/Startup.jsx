import "./startup.css";

function Startup() {
	return (
		<div className='Startup'>
			<div className='Overlay'>
				<div className='startupContent'>
					<span className='startupImg'></span>
					<h2 className='startupHeader'>Startup Ready</h2>
					<div className='startupAll'>
						<p className='startupLead'>
							With more than 13 years of experience in startups and small
							businesses, I understand the unique challenges of startup
							life.
						</p>
						<div className='startupLateContent'>
							<ul className='startupList'>
								<li className='startupItem'>
									11 years working in a fully remote setting
								</li>
								<li className='startupItem'>
									6.5 years working in a "department of one"
								</li>
								<li className='startupItem'>
									6.5 years as the only programmer in the company
								</li>
							</ul>
							<p>
								I'm uniquely equipped to understand the long hours,
								flexible job duties, and need for adaptability that
								accompany startup life, and I love it!
							</p>
							<p>My favorite industries to work in are:</p>
							<ul className='startupList'>
								<li className='startupItem'>Tech/SaaS</li>
								<li className='startupItem'>Healthcare/Medical</li>
								<li className='startupItem'>Insurance</li>
								<li className='startupItem'>Finance</li>
								<li className='startupItem'>Law/LegalTech</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Startup;
