import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import arrow from "../assets/images/arrow_top.svg";

import Tags from "../components/Tags";
import Ratings from "../components/Ratings";
import Dropdown from "../components/Dropdown";

function Details() {
	const data = useLoaderData();

	/**
	 * Logic for the carousel
	 */
	const [currentIndex, setCurrentIndex] = useState(0);

	const goNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % data.pictures.length);
	};

	const goPrev = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + data.pictures.length) % data.pictures.length
		);
	};

	return (
		<section className="details">
			<div className="carousel">
				<img
					src={data.pictures[currentIndex]}
					alt={`Apartment - ${data.title}`}
				/>
				<button onClick={goPrev} aria-label="Previous image">
					<img src={arrow} alt="previous" />
				</button>
				<button onClick={goNext} aria-label="Next image">
					<img src={arrow} alt="next" />
				</button>
				<span>
					{currentIndex + 1}/{data.pictures.length}
				</span>
			</div>
			<div className="desc">
				<div className="desc__location">
					<p>{data.title}</p>
					<p>{data.location}</p>
				</div>
				<div className="desc__tags">
					<ul>
						{data.tags.map((label) => (
							<Tags key={label} name={label} />
						))}
					</ul>
				</div>
				<div className="desc__host">
					<Ratings ratings={data.rating} />
					<div className="desc__host_info">
						<span>
							<p>{data.host.name.split(" ")[0]}</p>
							<p>{data.host.name.split(" ")[1]}</p>
						</span>
						<img
							src={data.host.picture}
							alt={`profil de ${data.host.name}`}
						/>
					</div>
				</div>
				<div className="desc__dropdown">
					<Dropdown title="Description">{data.description}</Dropdown>
					<Dropdown
						title="Équipement"
						equipments={data.equipments}
					></Dropdown>
				</div>
			</div>
		</section>
	);
}

export default Details;
