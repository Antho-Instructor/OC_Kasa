import { useLoaderData } from "react-router-dom";
function Details() {
	const data = useLoaderData();

	return (
		<section>
			<h1>Je suis {data.title}</h1>
		</section>
	);
}

export default Details;
