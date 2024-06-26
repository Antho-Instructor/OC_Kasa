function Header({ homepage, page }) {
	return (
		<header className={page === "about" ? "header__about" : "header"}>
			<p>
				{homepage && (
					<p>
						Chez vous, <br /> partout et ailleurs
					</p>
				)}
			</p>
		</header>
	);
}

export default Header;
