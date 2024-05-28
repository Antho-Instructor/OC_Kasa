import Card from "../components/Card";

function CardsList() {
	return (
		<section className="cards__list">
			{[1, 2, 3, 4, 5].map((card, index) => {
				return <Card key={index} />;
			})}
		</section>
	);
}

export default CardsList;
