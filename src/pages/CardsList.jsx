import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";

function CardsList() {
	const { datas } = useLoaderData();

	return (
		<section className="cards__list">
			{datas.map((card) => {
				return (
					<Link key={card.id} to={`/appartment/${card.id}`}>
						<Card card={card} />
					</Link>
				);
			})}
		</section>
	);
}

export default CardsList;
