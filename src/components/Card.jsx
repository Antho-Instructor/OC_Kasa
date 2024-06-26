function Card({ card }) {
	const backgroundStyle = {
		backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(44, 44, 44, 0.85) 100%), url(${card.cover})`,
	};

	return (
		<article className="card" style={backgroundStyle}>
			<h1>{card.title}</h1>
		</article>
	);
}

export default Card;
