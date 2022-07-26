import React, { useState } from "react";
import "./mobilenav.css";
import Button from "../components/Buttons";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
			<div className="Wrapper">
				<Button
					onClick={() => setIsOpen(!isOpen)}
					title='Menu'
					image='https://designcode.io/images/icons/courses.svg'
				/>
				{isOpen && (
                <div className="navMobileMenu">
                    <h2>Mobile Menu</h2>
                </div>
            )}
        </div>
    );
};

export default MobileNav;

