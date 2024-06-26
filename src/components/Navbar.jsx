import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
	return (
		<nav className="navbar">
			<img src={logo} alt="logo kasa" className="navbar__logo" />
			<ul className="navbar__ul">
				<li>
					<NavLink
						to="/"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						A propos
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
