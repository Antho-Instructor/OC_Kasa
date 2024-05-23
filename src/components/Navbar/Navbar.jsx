import logo from "../../assets/images/logo.png";

function Navbar() {
	return (
		<nav className="navbar">
			<img src={logo} alt="logo kasa" className="navbar__logo" />
			<ul className="navbar__ul">
				<li>
					<a href="#" className="active">
						Accueil
					</a>
				</li>
				<li>
					<a href="#">A propos</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
