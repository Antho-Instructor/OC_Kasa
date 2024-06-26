import logo from "../assets/images/logo_footer.png";

function Footer() {
	return (
		<footer className="footer">
			<img src={logo} alt="logo" />
			<p>
				&copy; 2020 Kasa. All <br />
				rights reserved
			</p>
		</footer>
	);
}

export default Footer;
