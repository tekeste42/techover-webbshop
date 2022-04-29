import React from 'react';
import logo from '../../../Images/techover.jpeg';
import pic from '../../../Images/techlogo.png';

function About() {
	return (
		<div>
			<div>
				<div
					className="intro-container"
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
				>
					<h1>Contact us by Mail, Phone or HOWL</h1>
					<div className="img">
						<img src={logo}></img>
					</div>
					<div className="header">
						<h2>Webbshop made by Techover, Join the Pack!</h2>
					</div>

					<div className="img-text">
						You want a change? You want freedom? You want the life that YOU want?
					</div>
					<div>
						<a style={{ textDecoration: 'none' }} href="https://www.academy.techover.nu/">
							JOIN US 🐺
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
