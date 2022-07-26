import React, { Link} from "react";

const Button = () => {
	return (
		<div>
			<Button
				href='https://github.com/styled-components/styled-components'
				target='_blank'
				rel='noopener'
				primary
			>
				GitHub
			</Button>

			<Button as={Link} href='/docs'>
				Documentation
			</Button>
		</div>
	);
};


export default Button;
